import { useState } from 'react';
import { Scanner } from '@yudiel/react-qr-scanner';

const ScanResultModal = ({ qrResult, closeModal }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-4 max-w-3xl w-full">
        <div className="flex justify-end">
          <button
            onClick={closeModal}
            className="text-lg font-bold text-black rounded-full border-2 w-8 h-8 flex justify-center items-center"
          >
            &times;
          </button>
        </div>

        <h3 className="text-xl font-bold mb-4">Scanned Result:</h3>
        <iframe src={qrResult} frameBorder="0" className="w-full md:h-96 h-full"></iframe>
      </div>
    </div>
  );
};

const QrCodeScanner = () => {
  const [qrResult, setQrResult] = useState(null);
  const [isScanning, setIsScanning] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const startScanner = () => {
    setIsScanning(true);
  };

  const stopScanner = () => {
    setIsScanning(false);
    setQrResult(null); // Optionally clear the result when stopping the scanner
  };

  const handleScan = (result) => {
    if (result) {
      setQrResult(result[0].rawValue);
      setIsScanning(false);
      setShowModal(true);
    }
  };

  const handleError = (err) => {
    setIsScanning(false);
    console.error('Scanning error:', err);
  };

  const closeModal = () => {
    setShowModal(false);
    setQrResult(null);
  };

  return (
    <div className="flex flex-col items-center space-y-6 p-4">
      {isScanning && (
        <div className="w-full max-w-md  p-1  rounded-lg  shadow-md">
          <div className="h-96">
            <Scanner
              onScan={handleScan}
              onError={handleError}
              scanDelay={300}
              formats={['qr_code', 'ean_13', 'upc_a']}
              paused={false}
            />
          </div>
        </div>
      )}

      <div className="flex space-x-4">
        {isScanning ? (
          <>
            <button
              onClick={stopScanner}
              disabled={!isScanning}
              className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg disabled:bg-gray-400"
            >
              Stop
            </button>
          </>
        ) : (
          <>
            <button
              onClick={startScanner}
              disabled={isScanning}
              className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg disabled:bg-gray-400"
            >
              Scan
            </button>
          </>
        )}
      </div>

      <div className="text-center mt-2">
        {qrResult ? (
          <div>
            <h3 className="text-xl font-bold">Scanned Result:</h3>

            <button
              onClick={() => setShowModal(true)}
              className="mt-2 text-blue-500 hover:underline"
            >
              View Full Result
            </button>
          </div>
        ) : (
          <p className="text-gray-500">No result yet. Please scan a QR code or barcode!</p>
        )}

        {showModal && <ScanResultModal qrResult={qrResult} closeModal={closeModal} />}
      </div>
    </div>
  );
};

export default QrCodeScanner;
