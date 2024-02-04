// define the Profil class
class Profil {
  constructor(symbol, type, bautiefe, rahmen, fluegel, gesamtbreite, schwelle, glasleiste, stulp, pfosten) {
    this.symbol = symbol;
    this.type = type;
    this.bautiefe = bautiefe;
    this.rahmen = rahmen;
    this.fluegel = fluegel;
    this.gesamtbreite = gesamtbreite;
    this.schwelle = schwelle;
    this.glasleiste = glasleiste;
    this.stulp = stulp;
    this.pfosten = pfosten;
  }

  get ueberlappung() {
    return (this.rahmen + this.fluegel) - this.gesamtbreite;
  }

  get rahmenNetto() {
    return this.rahmen-this.glasleiste;
  }

  get visibleRahmen() {
    return this.gesamtbreite - this.fluegel;
  }

  get visibleSchwelle() {
    return 20;
  }

  get schwelleSchift() {
    return this.gesamtbreite - this.fluegel - 20
  }
  get gesamtNetto() {
    return this.gesamtbreite-this.glasleiste;
  }
  get fluegelNetto() {
    return this.fluegel-this.glasleiste;
  }

}

export default Profil;

