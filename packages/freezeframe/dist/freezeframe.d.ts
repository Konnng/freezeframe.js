declare interface Freeze {
    $container: HTMLElement;
    $canvas: HTMLCanvasElement;
    $image: HTMLImageElement;
}

declare class Freezeframe {
    #private;
    options: FreezeframeOptions;
    items: Map<object, Freeze>;
    $images: HTMLImageElement[];
    private _eventListeners;
    private get _stylesInjected();
    constructor(target?: SelectorOrNodes | RequireProps<FreezeframeOptions, 'selector'>, options?: FreezeframeOptions);
    private _init;
    private _capture;
    private _load;
    private _setup;
    private _wrap;
    private _process;
    private _ready;
    private _attach;
    private _addEventListener;
    private _removeEventListener;
    private _injectStylesheet;
    private _emit;
    private _toggleOn;
    private _toggleOff;
    private _toggle;
    start(): this;
    stop(): this;
    get(index: number): Freeze | undefined;
    toggle(): this;
    on(event: string, cb: Function): this;
    reset($image?: HTMLImageElement): void;
    destroy(): void;
}
export default Freezeframe;

declare interface FreezeframeOptions {
    selector?: SelectorOrNodes;
    responsive?: boolean;
    trigger?: TriggerType;
    overlay?: boolean;
    warnings?: boolean;
}

declare type RequireProps<T extends {}, K extends keyof T> = Omit<T, K> & {
    [MK in K]-?: NonNullable<T[MK]>;
};

declare type SelectorOrNodes = string | Element | HTMLCollectionOf<Element> | NodeListOf<Element>;

declare type TriggerType = string | false;

export { }
