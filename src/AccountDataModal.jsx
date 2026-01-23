import { X, Download, Upload } from 'lucide-react'

function AccountDataModal({
  show,
  onClose,
  darkMode,
  currentUser,
  handleDownloadAccountData,
  handleUploadAccountData
}) {
  if (!show) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 max-w-md w-full`}>
        <div className="flex justify-between items-center mb-4">
          <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            Dados da Conta
          </h3>
          <button
            onClick={onClose}
            className={`p-2 rounded-lg ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'}`}
          >
            <X size={20} className={darkMode ? 'text-white' : 'text-gray-800'} />
          </button>
        </div>

        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-6`}>
          Faça backup dos seus dados ou restaure um backup anterior.
        </p>

        <div className="space-y-4">
          {/* Botão Download */}
          <button
            onClick={handleDownloadAccountData}
            className="w-full flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
          >
            <Download size={20} />
            <span>Download (Backup)</span>
          </button>

          {/* Botão Upload */}
          <div>
            <input
              type="file"
              id="account-data-upload"
              accept=".json"
              onChange={handleUploadAccountData}
              className="hidden"
            />
            <label
              htmlFor="account-data-upload"
              className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
            >
              <Upload size={20} />
              <span>Upload (Restaurar)</span>
            </label>
          </div>

          {/* Botão Cancelar */}
          <button
            onClick={onClose}
            className={`w-full px-6 py-3 rounded-lg transition-colors ${
              darkMode
                ? 'bg-gray-700 text-white hover:bg-gray-600'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            Cancelar
          </button>
        </div>

        <div className={`mt-4 p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
          <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            <strong>Atenção:</strong> O backup salva todos os dados da conta atual. Ao restaurar um backup, todos os dados atuais serão substituídos.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AccountDataModal
