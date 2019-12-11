interface Storitve_kampirnih_mestModel {
    id: number;
    kampirno_mesto: number;
    storitev: number;
}

export class StoritevKampirnihMest implements Storitve_kampirnih_mestModel {
    private _id: number;
    private _kampirno_mesto: number;
    private _storitev: number;


    get id(): number {
      return this._id;
    }

    set id(value: number) {
      this._id = value;
    }

    get kampirno_mesto(): number {
      return this._kampirno_mesto;
    }

    set kampirno_mesto(value: number) {
      this._kampirno_mesto = value;
    }

    get storitev(): number {
      return this._storitev;
    }

    set storitev(value: number) {
      this._storitev = value;
    }
}
