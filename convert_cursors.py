import struct
import io
import os
from PIL import Image


def read_chunks(data, pos=0, end=None):
    if end is None:
        end = len(data)
    while pos + 8 <= end:
        chunk_id = data[pos:pos+4]
        chunk_size = struct.unpack_from('<I', data, pos+4)[0]
        chunk_data_start = pos + 8
        chunk_data_end = chunk_data_start + chunk_size
        yield chunk_id, data[chunk_data_start:chunk_data_end]
        pos = chunk_data_end + (chunk_size & 1)


def extract_icon_chunks(data):
    icon_chunks = []
    if data[:4] != b'RIFF' or data[8:12] != b'ACON':
        return icon_chunks
    for chunk_id, chunk_data in read_chunks(data, 12):
        if chunk_id == b'LIST' and chunk_data[:4] == b'fram':
            for sub_id, sub_data in read_chunks(chunk_data, 4):
                if sub_id == b'icon':
                    icon_chunks.append(sub_data)
    return icon_chunks


def get_frame_duration_ms(data):
    for chunk_id, chunk_data in read_chunks(data, 12):
        if chunk_id == b'rate' and len(chunk_data) >= 4:
            jiffies = struct.unpack_from('<I', chunk_data, 0)[0]
            return max(int(jiffies * 1000 / 60), 20)
        if chunk_id == b'anih' and len(chunk_data) >= 32:
            jiffies = struct.unpack_from('<I', chunk_data, 28)[0]
            return max(int(jiffies * 1000 / 60), 20)
    return 100


def ani_to_gif(ani_path, gif_path):
    with open(ani_path, 'rb') as f:
        data = f.read()

    icon_chunks = extract_icon_chunks(data)
    if not icon_chunks:
        print(f'  [ERRO] Nenhum frame encontrado em {os.path.basename(ani_path)}')
        return False

    frame_duration = get_frame_duration_ms(data)
    frames = []

    for i, icon_data in enumerate(icon_chunks):
        try:
            img = Image.open(io.BytesIO(icon_data))
            img = img.convert('RGBA')
            frames.append(img)
        except Exception as e:
            print(f'  [AVISO] Frame {i} ignorado: {e}')

    if not frames:
        print(f'  [ERRO] Nenhum frame válido')
        return False

    # Deduplica frames idênticos consecutivos (alguns .ani repetem o mesmo frame)
    unique_frames = [frames[0]]
    for f in frames[1:]:
        if list(f.getdata()) != list(unique_frames[-1].getdata()):
            unique_frames.append(f)
    frames = unique_frames

    # Converte para GIF com transparência
    gif_frames = []
    for frame in frames:
        # GIF não suporta alpha completo — converte para paleta com transparência
        converted = frame.convert('P', palette=Image.ADAPTIVE, colors=255)
        gif_frames.append(converted)

    gif_frames[0].save(
        gif_path,
        save_all=True,
        append_images=gif_frames[1:],
        loop=0,
        duration=frame_duration,
        transparency=0,
        disposal=2,
    )

    print(f'  OK: {len(frames)} frames, {frame_duration}ms/frame -> {os.path.basename(gif_path)}')
    return True


cursor_dir = os.path.join(os.path.dirname(__file__), 'public', 'customcursor')
ani_files = sorted(f for f in os.listdir(cursor_dir) if f.lower().endswith('.ani'))

print(f'Convertendo {len(ani_files)} arquivo(s) .ani -> .gif...\n')
ok = 0
for ani_file in ani_files:
    print(f'{ani_file}:')
    ani_path = os.path.join(cursor_dir, ani_file)
    gif_name = os.path.splitext(ani_file)[0] + '.gif'
    gif_path = os.path.join(cursor_dir, gif_name)
    if ani_to_gif(ani_path, gif_path):
        ok += 1

print(f'\nConcluído: {ok}/{len(ani_files)} convertidos.')
