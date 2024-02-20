interface ISprites {
    front_default: string
    back_default: string
    other?: IPokemonSpriteOther;
};

export interface INamedApiResource<T> {
    name: string;
    url: string;
}

export interface IType {
    id: number;
    name: string;
}

export interface IPokemonType {
    slot: number;
    type: INamedApiResource<IType>;
}

export interface IPokemon {
    id: number,
    name: string,
    order: number,
    height: number,
    sprites: ISprites,
    base_experience: number,
    types: IPokemonType[];
};

export interface IPokemonReference {
    name: string,
    url?: string
};

interface ISpriteVariant {
    back_default: string | null;
    back_female: string | null;
    back_gray: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null;
    front_default: string | null;
    front_female: string | null;
    front_gray: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
}

export interface IPokemonSpriteOther {
    dream_world: Pick<ISpriteVariant, "front_default" | "front_female">;"official-artwork": {
        front_default: string;
    };
}

export interface IPokemonBulk {
    count: number,
    next: string,
    results: IPokemonReference[]
};

export interface IPokemonInfo extends Omit<IPokemon, 'order' | 'height' | 'sprites' | 'base_experience'> { };
export interface IPokemonFrame extends Omit<IPokemon, 'id' | 'name' | 'base_experience' | 'order' | 'height' | 'types'> { };
export interface IPokemonCard extends Omit<IPokemon, 'base_experience' | 'order' | 'height'> { };
