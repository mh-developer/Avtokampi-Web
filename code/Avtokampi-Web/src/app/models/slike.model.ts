interface SlikeModel {
    id: number;
    slika: Blob;
    avtokamp: number;
  created_at: Date;
  updated_at: Date;
}

export class Slika implements SlikeModel {
    private _id: number;
    private _slika: Blob;
    private _avtokamp: number;
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

    get slika(): Blob {
      return this._slika;
    }

    set slika(value: Blob) {
      this._slika = value;
    }

    get avtokamp(): number {
      return this._avtokamp;
    }

    set avtokamp(value: number) {
      this._avtokamp = value;
    }
}