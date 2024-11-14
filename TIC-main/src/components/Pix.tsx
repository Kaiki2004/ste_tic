import { useLocation, useNavigate } from 'react-router-dom';

const PixPaymentPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation<LocationState>();
  const { total } = location.state;

  const qrCodeImageUrl = './img/qrcode-pix.png'; // Substitua pelo caminho correto da imagem

  const telefone = "5516999882117";
  const mensagem = `Olá! Gostaria de marcar minha retirada e aqui está o comprovante de pagamento: R$ ${total.toFixed(2)}.`;
  const urlWhatsApp = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;

  const handlePayment = () => {
    window.open(urlWhatsApp, '_blank');
    navigate('/lojinha');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-700 mb-6 text-center">Pagamento via PIX</h1>
        <p className="text-lg text-gray-600 mb-6 text-center">Finalize sua compra com segurança. <br /> Pague pelo QRCode abaixo</p>
        
        <div className="flex justify-center mb-6">
          <img src={qrCodeImageUrl} alt="QR Code para pagamento via PIX" />
        </div>

        <button
          onClick={handlePayment}
          className="w-full bg-green-500 text-white py-3 rounded-md font-semibold text-lg hover:bg-green-600 transition mb-4"
        >
          Confirmar Pagamento
        </button>
      </div>
    </div>
  );
};

export default PixPaymentPage;
