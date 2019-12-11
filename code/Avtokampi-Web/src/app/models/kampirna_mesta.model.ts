interface Kampirna_mestaModel {
    id: number;
    naziv: string;
    velikost: string;
    avtokamp: number;
    kategorija: number;
    created_at: Date;
    updated_at: Date;
}

export class KampirnoMesto implements Kampirna_mestaModel{

    private _id: number;
    private _naziv: string;
    private _velikost: string;
    private _avtokamp: number;
    private _kategorija: number;
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

    get naziv(): string {
      return this._naziv;
    }

    set naziv(value: string) {
      this._naziv = value;
    }

    get velikost(): string {
      return this._velikost;
    }

    set velikost(value: string) {
      this._velikost = value;
    }

    get avtokamp(): number {
      return this._avtokamp;
    }

    set avtokamp(value: number) {
      this._avtokamp = value;
    }

    get kategorija(): number {
      return this._kategorija;
    }

    set kategorija(value: number) {
      this._kategorija = value;
    }
}
