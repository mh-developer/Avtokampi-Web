interface RezervacijeModel {
    id: number;
    od: Date;
    do: Date;
    uporabnik: number;
    avtokamp: number;
    kampirno_mesto: number;
    vrsta_kampiranja: number;
    status: number;
  created_at: Date;
  updated_at: Date;
}

export class Rezervacija implements RezervacijeModel {
    private _id: number;
    private _od: Date;
    private _do: Date;
    private _uporabnik: number;
    private _avtokamp: number;
    private _kampirno_mesto: number;
    private _vrsta_kampiranja: number;
    private _status: number;
  private _created_at: Date;
  private _updated_at: Date;


  get created_at(): Date {
    return this._created_at;
  }

  set created_at(value: Date) {
    this._created_at = value;
  }

  get updated_at(): Date {
    return this._updated_at;
  }

  set updated_at(value: Date) {
    this._updated_at = value;
  }

  get id(): number {
      return this._id;
    }

    set id(value: number) {
      this._id = value;
    }

    get od(): Date {
      return this._od;
    }

    set od(value: Date) {
      this._od = value;
    }

    get do(): Date {
      return this._do;
    }

    set do(value: Date) {
      this._do = value;
    }

    get uporabnik(): number {
      return this._uporabnik;
    }

    set uporabnik(value: number) {
      this._uporabnik = value;
    }

    get avtokamp(): number {
      return this._avtokamp;
    }

    set avtokamp(value: number) {
      this._avtokamp = value;
    }

    get kampirno_mesto(): number {
      return this._kampirno_mesto;
    }

    set kampirno_mesto(value: number) {
      this._kampirno_mesto = value;
    }

    get vrsta_kampiranja(): number {
      return this._vrsta_kampiranja;
    }

    set vrsta_kampiranja(value: number) {
      this._vrsta_kampiranja = value;
    }

    get status(): number {
      return this._status;
    }

    set status(value: number) {
      this._status = value;
    }
}
