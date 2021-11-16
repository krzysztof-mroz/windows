function ProfileCard(props) {
  const { profil } = props;

  return (
    <div className="ba w-100 w-30-l fl tc mh1 mv1  b--moon-gray">
      <div className="flex flex-wrap justify-start w-100">
        <div className="w-100 mh1">
          <img id={profil.id} src={profil.src} alt={profil.alt}></img>
        </div>
        <div className="w-100 ">
          <p
            className="gray f6 ws-normal"
            name="tekstkoloru"
            id={profil.idcolor}
          >
           {profil.material == "a" ? "RAL Farbe" : "weiß"} 
          </p>
          <p className="red f5" id={profil.idcena}>
            ab {profil.prices[0]},-
          </p>
          <small id={profil.idmwst} className="f7 ma2 gray">mit MwSt</small>
        </div>
      </div>
      <div>
        <h4 className="ma2">{profil.alt}</h4>
        <p className="f6 ma2 gray">{profil.desc}</p>
      </div>
      <button className="w3-button w3-border w3-border-orange w3-sand mb3" type="submit" data-toggle="tooltip" data-placement="top" title="Nachricht abschicken">mehr</button>
    </div>
  );
}

export default ProfileCard;
