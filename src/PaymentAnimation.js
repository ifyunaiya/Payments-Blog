const PaymentAnimation = () => {
  return (
    <div className="payment-animation">
      {/* Debtor */}
      <div className="payment-person debtor">
        <div className="speech-bubble">
          I want to send €500
        </div>

        <div className="stickman">
          <div className="head"></div>
          <div className="body"></div>
          <div className="arm arm-left"></div>
          <div className="arm arm-right"></div>
          <div className="leg leg-left"></div>
          <div className="leg leg-right"></div>
        </div>

        <strong>Debtor</strong>
        <span>Person sending money</span>
      </div>

      {/* pain.001 */}
      <div className="payment-step">
        <div className="message-card">
          <span>Payment instruction</span>
          <strong>pain.001</strong>
        </div>
      </div>

      {/* Sending bank */}
      <div className="payment-bank">
        <div className="bank-icon">🏦</div>

        <strong>Sending Bank</strong>
        <span>Processes the instruction</span>
      </div>

      {/* Cross-border network */}
      <div className="payment-network">
        <div className="network-globe">
          🌍
        </div>

        <div className="network-line">
          <div className="payment-dot"></div>
        </div>

        <strong>Cross-Border Network</strong>
        <span>Payment travels internationally</span>
      </div>

      {/* Receiving bank */}
      <div className="payment-bank">
        <div className="bank-icon">🏦</div>

        <strong>Receiving Bank</strong>
        <span>Receives the payment</span>
      </div>

      {/* pacs.008 */}
      <div className="payment-step">
        <div className="message-card">
          <span>Payment message</span>
          <strong>pacs.008</strong>
        </div>
      </div>

      {/* Creditor */}
      <div className="payment-person creditor">
        <div className="speech-bubble received">
          €500 received!
        </div>

        <div className="stickman">
          <div className="head"></div>
          <div className="body"></div>
          <div className="arm arm-left"></div>
          <div className="arm arm-right"></div>
          <div className="leg leg-left"></div>
          <div className="leg leg-right"></div>
        </div>

        <strong>Creditor</strong>
        <span>Person receiving money</span>
      </div>
    </div>
  );
};

export default PaymentAnimation;