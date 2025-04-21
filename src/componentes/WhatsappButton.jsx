
import React, { useState } from 'react';
import '../css/WhatsAppButton.css';
import { useTranslation } from 'react-i18next';

function WhatsAppButton() {
    const { t } = useTranslation();
    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => setHovered(true);
    const handleMouseLeave = () => setHovered(false);

    const encodedMessage = encodeURIComponent(t("whatsappMessage"));
    const phoneNumber = '652677261'; // Asegúrate de usar el formato internacional sin '+'

    const openWhatsAppChat = () => {
        const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <div
            className="whatsapp-button"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={openWhatsAppChat}
            aria-label={t("whatsappTooltip")}
        >
            {hovered && (
                <div className="whatsapp-tooltip">
                    {t("whatsappTooltip")}
                </div>
            )}
            <i className="fab fa-whatsapp whatsapp-icon"></i>
        </div>
    );
}

export default WhatsAppButton;

