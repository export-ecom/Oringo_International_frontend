import React from "react";
import './ContentCard.css'
import InfoCard from "../../pages/InfoCard/InfoCard";
import Foods from '../../assets/Foods.png';
import Poojasamagri from '../../assets/poojasamagri.png';
import Handicrafts from '../../assets/Handicraft.png';
import Medicine from '../../assets/medicine.png';

function ContentCard() {
    return (
        <div>
            <div className="cards-container">
                <InfoCard image={Foods} title="Foods" rating={3.5} />
                <InfoCard image={Poojasamagri} title="PoojaSamagri" rating={4.5} />
                <InfoCard image={Handicrafts} title="HandiCrafts" rating={2.0} />
                <InfoCard image={Medicine} title="Medicine" rating={5.0} />
            </div>
        </div>
    );
}

export default ContentCard;
