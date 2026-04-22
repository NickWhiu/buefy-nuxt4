import { AllowedComponentProps } from 'vue';
import type { App } from 'vue';
import { ComponentCustomProps } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import type { ComponentPublicInstance } from 'vue';
import { CreateComponentPublicInstance } from 'vue';
import { DefineComponent } from 'vue';
import { ExtractPropTypes } from 'vue';
import { PropType } from 'vue';
import { PublicProps } from 'vue';
import { RendererElement } from 'vue';
import { RendererNode } from 'vue';
import { Slot } from 'vue';
import { Slots } from 'vue';
import { StyleValue } from 'vue';
import { VNode } from 'vue';
import { VNodeProps } from 'vue';

export declare const Autocomplete: {
    install(Vue: App): void;
};

export declare const BAutocomplete: DefineComponent<    {
modelValue: PropType<number | string | null>;
data: {
type: ArrayConstructor;
default: () => never[];
};
field: {
type: StringConstructor;
default: string;
};
keepFirst: BooleanConstructor;
clearOnSelect: BooleanConstructor;
openOnFocus: BooleanConstructor;
customFormatter: {
type: PropType<(option: any) => string>;
};
checkInfiniteScroll: BooleanConstructor;
keepOpen: BooleanConstructor;
selectOnClickOutside: BooleanConstructor;
clearable: BooleanConstructor;
maxHeight: (NumberConstructor | StringConstructor)[];
dropdownPosition: {
type: StringConstructor;
default: string;
};
groupField: StringConstructor;
groupOptions: StringConstructor;
iconRight: StringConstructor;
iconRightClickable: BooleanConstructor;
appendToBody: BooleanConstructor;
type: {
type: StringConstructor;
default: string;
};
confirmKeys: {
type: ArrayConstructor;
default: () => string[];
};
selectableHeader: BooleanConstructor;
selectableFooter: BooleanConstructor;
autocomplete: StringConstructor;
}, unknown, {
selected: any;
hovered: any;
headerHovered: boolean | null;
footerHovered: boolean | null;
isActive: boolean;
newValue: string | number | null | undefined;
newAutocomplete: string;
ariaAutocomplete: string;
isListInViewportVertically: boolean;
hasFocus: boolean;
style: {};
_isAutocomplete: boolean;
_elementRef: string;
_bodyEl: Element | undefined;
timeOutID: ReturnType<typeof setTimeout> | undefined;
}, {
computedData(): DataItem[];
isEmpty(): boolean;
whiteList(): any[];
hasDefaultSlot(): boolean;
hasGroupSlot(): boolean;
hasEmptySlot(): boolean;
hasHeaderSlot(): boolean;
hasFooterSlot(): boolean;
isOpenedTop(): boolean;
newIconRight(): string | undefined;
newIconRightClickable(): boolean;
contentStyle(): {
maxHeight: string | undefined;
};
}, {
setHovered(option: any): void;
setSelected(option: any, closeDropdown?: boolean, event?: Event): void;
selectFirstOption(computedData: DataItem[]): void;
findHoveredIndex(data: any[]): number;
keydown(event: KeyboardEvent): void;
selectHeaderOrFoterByClick(event: MouseEvent, origin: "header" | "footer"): void;
checkIfHeaderOrFooterSelected(event: Event, triggerClick: {
origin: "header" | "footer";
} | null, closeDropdown?: boolean): void;
clickedOutside(event: MouseEvent): void;
getValue(option: any): any;
checkIfReachedTheEndOfScroll(): void;
calcDropdownInViewportVertical(): void;
keyArrows(direction: "down" | "up"): void;
focused(event?: Event): void;
onBlur(event: Event): void;
onInput(): void;
rightIconClick(event: MouseEvent): void;
checkValidity(): void;
updateAppendToBody(): void;
}, DefineComponent<    {
compatFallthrough: {
type: BooleanConstructor;
default: () => boolean;
};
}, unknown, unknown, {
rootAttrs(): {
class: unknown;
style: StyleValue;
id: string | undefined;
} | {
class?: undefined;
style?: undefined;
id?: undefined;
};
fallthroughAttrs(): {
[x: string]: unknown;
};
}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {
compatFallthrough: {
type: BooleanConstructor;
default: () => boolean;
};
}>>, {
compatFallthrough: boolean;
}, {}> | DefineComponent<    {
size: StringConstructor;
expanded: BooleanConstructor;
loading: BooleanConstructor;
rounded: BooleanConstructor;
icon: StringConstructor;
iconPack: StringConstructor;
maxlength: (NumberConstructor | StringConstructor)[];
useHtml5Validation: {
type: BooleanConstructor;
default: () => boolean;
};
validationMessage: StringConstructor;
locale: {
type: (StringConstructor | {
(arrayLength: number): string[];
(...items: string[]): string[];
new (arrayLength: number): string[];
new (...items: string[]): string[];
isArray(arg: any): arg is any[];
readonly prototype: any[];
from<T>(arrayLike: ArrayLike<T>): T[];
from<T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
from<T>(iterable: Iterable<T> | ArrayLike<T>): T[];
from<T, U>(iterable: Iterable<T> | ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
of<T>(...items: T[]): T[];
readonly [Symbol.species]: ArrayConstructor;
})[];
default: () => string | string[] | null | undefined;
};
statusIcon: {
type: BooleanConstructor;
default: () => boolean;
};
}, unknown, {
isValid: boolean;
isFocused: boolean;
newIconPack: string;
_elementRef: string;
}, {
parentField(): CreateComponentPublicInstance<Readonly<ExtractPropTypes<    {
type: {
type: PropType<FieldTypeProp>;
default: undefined;
};
label: StringConstructor;
labelFor: StringConstructor;
message: {
type: PropType<FieldMessageProp>;
default: undefined;
};
grouped: BooleanConstructor;
groupMultiline: BooleanConstructor;
position: StringConstructor;
expanded: BooleanConstructor;
horizontal: BooleanConstructor;
addons: {
type: BooleanConstructor;
default: boolean;
};
customClass: StringConstructor;
labelPosition: {
type: StringConstructor;
default: () => FieldLabelPosition | null | undefined;
};
}>>, unknown, {
newType: FieldTypeProp | null;
newMessage: FieldMessageProp | null;
fieldLabelSize: string | null;
numberInputClasses: string[];
_isField: boolean;
}, {
rootClasses(): (string[] | {
'is-expanded': boolean;
'is-horizontal': boolean;
'is-floating-in-label': boolean | "" | undefined;
'is-floating-label': boolean | "" | undefined;
})[];
innerFieldClasses(): (string | {
'is-grouped-multiline': boolean;
} | undefined)[];
hasInnerField(): boolean;
newPosition(): string | undefined;
formattedMessage(): string[] | "";
hasLabel(): string | Slot<any> | undefined;
hasMessage(): Slot<any> | FieldMessagePropItem | FieldMessagePropItem[] | undefined;
}, {
fieldType(): "is-grouped" | "has-addons" | undefined;
hasAddons(): boolean;
wrapNumberinput({ controlsPosition, size }: {
controlsPosition?: string;
size?: string;
}): void;
}, ComponentOptionsMixin, ComponentOptionsMixin, {}, VNodeProps & AllowedComponentProps & ComponentCustomProps & Readonly<ExtractPropTypes<    {
type: {
type: PropType<FieldTypeProp>;
default: undefined;
};
label: StringConstructor;
labelFor: StringConstructor;
message: {
type: PropType<FieldMessageProp>;
default: undefined;
};
grouped: BooleanConstructor;
groupMultiline: BooleanConstructor;
position: StringConstructor;
expanded: BooleanConstructor;
horizontal: BooleanConstructor;
addons: {
type: BooleanConstructor;
default: boolean;
};
customClass: StringConstructor;
labelPosition: {
type: StringConstructor;
default: () => FieldLabelPosition | null | undefined;
};
}>>, {
type: FieldTypeProp;
expanded: boolean;
message: FieldMessageProp;
grouped: boolean;
groupMultiline: boolean;
horizontal: boolean;
addons: boolean;
labelPosition: string;
}, true, {}, {}, {
P: {};
B: {};
D: {};
C: {};
M: {};
Defaults: {};
}, Readonly<ExtractPropTypes<    {
type: {
type: PropType<FieldTypeProp>;
default: undefined;
};
label: StringConstructor;
labelFor: StringConstructor;
message: {
type: PropType<FieldMessageProp>;
default: undefined;
};
grouped: BooleanConstructor;
groupMultiline: BooleanConstructor;
position: StringConstructor;
expanded: BooleanConstructor;
horizontal: BooleanConstructor;
addons: {
type: BooleanConstructor;
default: boolean;
};
customClass: StringConstructor;
labelPosition: {
type: StringConstructor;
default: () => FieldLabelPosition | null | undefined;
};
}>>, {}, {
newType: FieldTypeProp | null;
newMessage: FieldMessageProp | null;
fieldLabelSize: string | null;
numberInputClasses: string[];
_isField: boolean;
}, {
rootClasses(): (string[] | {
'is-expanded': boolean;
'is-horizontal': boolean;
'is-floating-in-label': boolean | "" | undefined;
'is-floating-label': boolean | "" | undefined;
})[];
innerFieldClasses(): (string | {
'is-grouped-multiline': boolean;
} | undefined)[];
hasInnerField(): boolean;
newPosition(): string | undefined;
formattedMessage(): string[] | "";
hasLabel(): string | Slot<any> | undefined;
hasMessage(): Slot<any> | FieldMessagePropItem | FieldMessagePropItem[] | undefined;
}, {
fieldType(): "is-grouped" | "has-addons" | undefined;
hasAddons(): boolean;
wrapNumberinput({ controlsPosition, size }: {
controlsPosition?: string;
size?: string;
}): void;
}, {
type: FieldTypeProp;
expanded: boolean;
message: FieldMessageProp;
grouped: boolean;
groupMultiline: boolean;
horizontal: boolean;
addons: boolean;
labelPosition: string;
}> | undefined;
statusType(): string | undefined;
statusMessage(): Slot<any> | FieldMessagePropItem | FieldMessagePropItem[] | undefined;
iconSize(): "" | "is-medium" | "is-small" | undefined;
}, {
focus(): void;
onBlur($event?: Event): void;
onFocus($event?: Event): void;
getElement(): HTMLInputElement | HTMLButtonElement | HTMLFieldSetElement | HTMLOutputElement | HTMLSelectElement | HTMLTextAreaElement;
setInvalid(): void;
setValidity(type: FieldTypeProp | null, message: FieldMessageProp | null): void;
checkHtml5Validity(): boolean;
}, ComponentOptionsMixin, ComponentOptionsMixin, {
blur: (event?: Event) => true;
focus: (event?: Event) => true;
}, string, PublicProps, Readonly<ExtractPropTypes<    {
size: StringConstructor;
expanded: BooleanConstructor;
loading: BooleanConstructor;
rounded: BooleanConstructor;
icon: StringConstructor;
iconPack: StringConstructor;
maxlength: (NumberConstructor | StringConstructor)[];
useHtml5Validation: {
type: BooleanConstructor;
default: () => boolean;
};
validationMessage: StringConstructor;
locale: {
type: (StringConstructor | {
(arrayLength: number): string[];
(...items: string[]): string[];
new (arrayLength: number): string[];
new (...items: string[]): string[];
isArray(arg: any): arg is any[];
readonly prototype: any[];
from<T>(arrayLike: ArrayLike<T>): T[];
from<T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
from<T>(iterable: Iterable<T> | ArrayLike<T>): T[];
from<T, U>(iterable: Iterable<T> | ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
of<T>(...items: T[]): T[];
readonly [Symbol.species]: ArrayConstructor;
})[];
default: () => string | string[] | null | undefined;
};
statusIcon: {
type: BooleanConstructor;
default: () => boolean;
};
}>> & {
onFocus?: ((event?: Event | undefined) => any) | undefined;
onBlur?: ((event?: Event | undefined) => any) | undefined;
}, {
rounded: boolean;
loading: boolean;
expanded: boolean;
locale: string | string[];
useHtml5Validation: boolean;
statusIcon: boolean;
}, {}>, ComponentOptionsMixin, {
active: (active: boolean) => true;
blur: (event: Event) => true;
focus: (event?: Event) => true;
'icon-click': (event: MouseEvent) => true;
'icon-right-click': (event: MouseEvent) => true;
'infinite-scroll': () => true;
select: (selected: any, event?: Event) => true;
'select-footer': (event: Event) => true;
'select-header': (event: Event) => true;
typing: (value: number | string | null | undefined) => true;
'update:modelValue': (value: number | string) => true;
}, string, PublicProps, Readonly<ExtractPropTypes<    {
modelValue: PropType<number | string | null>;
data: {
type: ArrayConstructor;
default: () => never[];
};
field: {
type: StringConstructor;
default: string;
};
keepFirst: BooleanConstructor;
clearOnSelect: BooleanConstructor;
openOnFocus: BooleanConstructor;
customFormatter: {
type: PropType<(option: any) => string>;
};
checkInfiniteScroll: BooleanConstructor;
keepOpen: BooleanConstructor;
selectOnClickOutside: BooleanConstructor;
clearable: BooleanConstructor;
maxHeight: (NumberConstructor | StringConstructor)[];
dropdownPosition: {
type: StringConstructor;
default: string;
};
groupField: StringConstructor;
groupOptions: StringConstructor;
iconRight: StringConstructor;
iconRightClickable: BooleanConstructor;
appendToBody: BooleanConstructor;
type: {
type: StringConstructor;
default: string;
};
confirmKeys: {
type: ArrayConstructor;
default: () => string[];
};
selectableHeader: BooleanConstructor;
selectableFooter: BooleanConstructor;
autocomplete: StringConstructor;
}>> & {
onFocus?: ((event?: Event | undefined) => any) | undefined;
onBlur?: ((event: Event) => any) | undefined;
onSelect?: ((selected: any, event?: Event | undefined) => any) | undefined;
"onUpdate:modelValue"?: ((value: string | number) => any) | undefined;
"onIcon-click"?: ((event: MouseEvent) => any) | undefined;
"onIcon-right-click"?: ((event: MouseEvent) => any) | undefined;
onActive?: ((active: boolean) => any) | undefined;
"onInfinite-scroll"?: (() => any) | undefined;
"onSelect-footer"?: ((event: Event) => any) | undefined;
"onSelect-header"?: ((event: Event) => any) | undefined;
onTyping?: ((value: string | number | null | undefined) => any) | undefined;
}, {
data: unknown[];
field: string;
type: string;
iconRightClickable: boolean;
checkInfiniteScroll: boolean;
keepFirst: boolean;
appendToBody: boolean;
clearOnSelect: boolean;
openOnFocus: boolean;
keepOpen: boolean;
selectOnClickOutside: boolean;
clearable: boolean;
dropdownPosition: string;
confirmKeys: unknown[];
selectableHeader: boolean;
selectableFooter: boolean;
}, {}>;

export declare const BBreadcrumb: DefineComponent<    {
align: {
type: StringConstructor;
default: () => string;
};
separator: {
type: StringConstructor;
default: () => string;
};
size: {
type: StringConstructor;
default: () => string;
};
}, unknown, unknown, {
breadcrumbClasses(): string[];
}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {
align: {
type: StringConstructor;
default: () => string;
};
separator: {
type: StringConstructor;
default: () => string;
};
size: {
type: StringConstructor;
default: () => string;
};
}>>, {
size: string;
align: string;
separator: string;
}, {}>;

export declare const BBreadcrumbItem: DefineComponent<    {
tag: {
type: (StringConstructor | ObjectConstructor)[];
default: () => string;
};
active: BooleanConstructor;
}, unknown, unknown, {}, {}, DefineComponent<    {
compatFallthrough: {
type: BooleanConstructor;
default: () => boolean;
};
}, unknown, unknown, {
rootAttrs(): {
class: unknown;
style: StyleValue;
id: string | undefined;
} | {
class?: undefined;
style?: undefined;
id?: undefined;
};
fallthroughAttrs(): {
[x: string]: unknown;
};
}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {
compatFallthrough: {
type: BooleanConstructor;
default: () => boolean;
};
}>>, {
compatFallthrough: boolean;
}, {}>, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {
tag: {
type: (StringConstructor | ObjectConstructor)[];
default: () => string;
};
active: BooleanConstructor;
}>>, {
active: boolean;
tag: string | Record<string, any>;
}, {}>;

export declare const BButton: DefineComponent<    {
type: (StringConstructor | ObjectConstructor)[];
size: StringConstructor;
label: StringConstructor;
iconPack: StringConstructor;
iconLeft: StringConstructor;
iconRight: StringConstructor;
rounded: {
type: BooleanConstructor;
default: () => boolean;
};
loading: BooleanConstructor;
outlined: BooleanConstructor;
expanded: BooleanConstructor;
inverted: BooleanConstructor;
focused: BooleanConstructor;
active: BooleanConstructor;
hovered: BooleanConstructor;
selected: BooleanConstructor;
nativeType: {
type: PropType<ButtonNativeType>;
default: string;
validator: (value: unknown) => boolean;
};
tag: {
type: (StringConstructor | ObjectConstructor)[];
default: string;
validator: (value: unknown) => boolean;
};
}, unknown, unknown, {
computedTag(): string | Record<string, any>;
iconSize(): string;
}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {
type: (StringConstructor | ObjectConstructor)[];
size: StringConstructor;
label: StringConstructor;
iconPack: StringConstructor;
iconLeft: StringConstructor;
iconRight: StringConstructor;
rounded: {
type: BooleanConstructor;
default: () => boolean;
};
loading: BooleanConstructor;
outlined: BooleanConstructor;
expanded: BooleanConstructor;
inverted: BooleanConstructor;
focused: BooleanConstructor;
active: BooleanConstructor;
hovered: BooleanConstructor;
selected: BooleanConstructor;
nativeType: {
type: PropType<ButtonNativeType>;
default: string;
validator: (value: unknown) => boolean;
};
tag: {
type: (StringConstructor | ObjectConstructor)[];
default: string;
validator: (value: unknown) => boolean;
};
}>>, {
rounded: boolean;
loading: boolean;
outlined: boolean;
expanded: boolean;
inverted: boolean;
focused: boolean;
active: boolean;
hovered: boolean;
selected: boolean;
nativeType: "button" | "reset" | "submit";
tag: string | Record<string, any>;
}, {}>;

export declare const BCarousel: DefineComponent<    {
modelValue: {
type: NumberConstructor;
default: number;
};
animated: {
type: StringConstructor;
default: string;
};
interval: NumberConstructor;
hasDrag: {
type: BooleanConstructor;
default: boolean;
};
autoplay: {
type: BooleanConstructor;
default: boolean;
};
pauseHover: {
type: BooleanConstructor;
default: boolean;
};
pauseInfo: {
type: BooleanConstructor;
default: boolean;
};
pauseInfoType: {
type: StringConstructor;
default: string;
};
pauseText: {
type: StringConstructor;
default: string;
};
arrow: {
type: BooleanConstructor;
default: boolean;
};
arrowHover: {
type: BooleanConstructor;
default: boolean;
};
repeat: {
type: BooleanConstructor;
default: boolean;
};
iconPack: StringConstructor;
iconSize: StringConstructor;
iconPrev: {
type: StringConstructor;
default: () => string;
};
iconNext: {
type: StringConstructor;
default: () => string;
};
indicator: {
type: BooleanConstructor;
default: boolean;
};
indicatorBackground: BooleanConstructor;
indicatorCustom: BooleanConstructor;
indicatorCustomSize: {
type: StringConstructor;
default: string;
};
indicatorInside: {
type: BooleanConstructor;
default: boolean;
};
indicatorMode: {
type: PropType<IndicatorMode>;
default: string;
};
indicatorPosition: {
type: StringConstructor;
default: string;
};
indicatorStyle: {
type: StringConstructor;
default: string;
};
overlay: BooleanConstructor;
progress: BooleanConstructor;
progressType: {
type: StringConstructor;
default: string;
};
withCarouselList: BooleanConstructor;
}, unknown, {
transition: string;
activeChild: number;
isPause: boolean;
dragX: number | false;
timer: ReturnType<typeof setInterval> | undefined;
}, {
indicatorClasses(): (string | false | {
'has-background': boolean;
'has-custom': boolean;
'is-inside': boolean;
})[];
hasPrev(): boolean;
hasNext(): boolean;
activeChildIndex(): number | undefined;
}, {
startTimer(): void;
pauseTimer(): void;
restartTimer(): void;
checkPause(): void;
changeActive(newIndex: number, direction?: number): void;
modeChange(trigger: IndicatorMode, value: number): void;
prev(): void;
next(): void;
dragStart(event: MouseEvent | TouchEvent): void;
dragEnd(event: MouseEvent | TouchEvent): void;
}, ProviderParentMixin<3, ICarouselItem>, ComponentOptionsMixin, {
change: (_index: number) => true;
click: () => true;
'update:modelValue': (_value: number) => true;
}, string, PublicProps, Readonly<ExtractPropTypes<    {
modelValue: {
type: NumberConstructor;
default: number;
};
animated: {
type: StringConstructor;
default: string;
};
interval: NumberConstructor;
hasDrag: {
type: BooleanConstructor;
default: boolean;
};
autoplay: {
type: BooleanConstructor;
default: boolean;
};
pauseHover: {
type: BooleanConstructor;
default: boolean;
};
pauseInfo: {
type: BooleanConstructor;
default: boolean;
};
pauseInfoType: {
type: StringConstructor;
default: string;
};
pauseText: {
type: StringConstructor;
default: string;
};
arrow: {
type: BooleanConstructor;
default: boolean;
};
arrowHover: {
type: BooleanConstructor;
default: boolean;
};
repeat: {
type: BooleanConstructor;
default: boolean;
};
iconPack: StringConstructor;
iconSize: StringConstructor;
iconPrev: {
type: StringConstructor;
default: () => string;
};
iconNext: {
type: StringConstructor;
default: () => string;
};
indicator: {
type: BooleanConstructor;
default: boolean;
};
indicatorBackground: BooleanConstructor;
indicatorCustom: BooleanConstructor;
indicatorCustomSize: {
type: StringConstructor;
default: string;
};
indicatorInside: {
type: BooleanConstructor;
default: boolean;
};
indicatorMode: {
type: PropType<IndicatorMode>;
default: string;
};
indicatorPosition: {
type: StringConstructor;
default: string;
};
indicatorStyle: {
type: StringConstructor;
default: string;
};
overlay: BooleanConstructor;
progress: BooleanConstructor;
progressType: {
type: StringConstructor;
default: string;
};
withCarouselList: BooleanConstructor;
}>> & {
onChange?: ((_index: number) => any) | undefined;
onClick?: (() => any) | undefined;
"onUpdate:modelValue"?: ((_value: number) => any) | undefined;
}, {
progress: boolean;
repeat: boolean;
modelValue: number;
autoplay: boolean;
animated: string;
hasDrag: boolean;
pauseHover: boolean;
pauseInfo: boolean;
pauseInfoType: string;
pauseText: string;
arrow: boolean;
arrowHover: boolean;
iconPrev: string;
iconNext: string;
indicator: boolean;
indicatorBackground: boolean;
indicatorCustom: boolean;
indicatorCustomSize: string;
indicatorInside: boolean;
indicatorMode: "click" | "hover";
indicatorPosition: string;
indicatorStyle: string;
overlay: boolean;
progressType: string;
withCarouselList: boolean;
}, {}>;

export declare const BCarouselItem: DefineComponent<    {}, {}, {
transitionName: null;
}, {
transition(): string | undefined;
isActive(): boolean;
}, {}, InjectedChildMixin<1, ICarousel>, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {}>>, {}, {}>;

export declare const BCarouselList: DefineComponent<    {
data: {
type: {
(arrayLength: number): any[];
(...items: any[]): any[];
new (arrayLength: number): any[];
new (...items: any[]): any[];
isArray(arg: any): arg is any[];
readonly prototype: any[];
from<T>(arrayLike: ArrayLike<T>): T[];
from<T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
from<T>(iterable: Iterable<T> | ArrayLike<T>): T[];
from<T, U>(iterable: Iterable<T> | ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
of<T>(...items: T[]): T[];
readonly [Symbol.species]: ArrayConstructor;
};
default: () => never[];
};
modelValue: {
type: NumberConstructor;
default: number;
};
scrollValue: {
type: NumberConstructor;
default: number;
};
hasDrag: {
type: BooleanConstructor;
default: boolean;
};
hasGrayscale: BooleanConstructor;
hasOpacity: BooleanConstructor;
repeat: BooleanConstructor;
itemsToShow: {
type: NumberConstructor;
default: number;
};
itemsToList: {
type: NumberConstructor;
default: number;
};
asIndicator: BooleanConstructor;
arrow: {
type: BooleanConstructor;
default: boolean;
};
arrowHover: {
type: BooleanConstructor;
default: boolean;
};
iconPack: StringConstructor;
iconSize: StringConstructor;
iconPrev: {
type: StringConstructor;
default: () => string;
};
iconNext: {
type: StringConstructor;
default: () => string;
};
breakpoints: {
type: PropType<Record<number, BreakpointOptions>>;
default: () => {};
};
}, unknown, {
activeItem: number;
scrollIndex: number;
delta: number;
dragX: number | false;
hold: number;
windowWidth: number;
touch: boolean;
observer: ResizeObserver | null;
refresh_: number;
}, {
dragging(): boolean;
listClass(): {
'has-grayscale': boolean | undefined;
'has-opacity': boolean | undefined;
'is-dragging': boolean;
}[];
itemStyle(): string;
translation(): number;
total(): number;
hasPrev(): boolean;
hasNext(): boolean;
breakpointKeys(): string[];
settings(): BreakpointSettings;
itemWidth(): number;
}, {
resized(): void;
switchTo(newIndex: number): void;
next(): void;
prev(): void;
checkAsIndicator(value: number, event: MouseEvent | TouchEvent): void;
dragStart(event: MouseEvent | TouchEvent): void;
dragMove(event: MouseEvent | TouchEvent): void;
dragEnd(): void;
refresh(): void;
}, ComponentOptionsMixin, ComponentOptionsMixin, {
switch: (_value: number) => true;
'update:modelValue': (_value: number) => true;
'updated:scroll': (_index: number) => true;
}, string, PublicProps, Readonly<ExtractPropTypes<    {
data: {
type: {
(arrayLength: number): any[];
(...items: any[]): any[];
new (arrayLength: number): any[];
new (...items: any[]): any[];
isArray(arg: any): arg is any[];
readonly prototype: any[];
from<T>(arrayLike: ArrayLike<T>): T[];
from<T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
from<T>(iterable: Iterable<T> | ArrayLike<T>): T[];
from<T, U>(iterable: Iterable<T> | ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
of<T>(...items: T[]): T[];
readonly [Symbol.species]: ArrayConstructor;
};
default: () => never[];
};
modelValue: {
type: NumberConstructor;
default: number;
};
scrollValue: {
type: NumberConstructor;
default: number;
};
hasDrag: {
type: BooleanConstructor;
default: boolean;
};
hasGrayscale: BooleanConstructor;
hasOpacity: BooleanConstructor;
repeat: BooleanConstructor;
itemsToShow: {
type: NumberConstructor;
default: number;
};
itemsToList: {
type: NumberConstructor;
default: number;
};
asIndicator: BooleanConstructor;
arrow: {
type: BooleanConstructor;
default: boolean;
};
arrowHover: {
type: BooleanConstructor;
default: boolean;
};
iconPack: StringConstructor;
iconSize: StringConstructor;
iconPrev: {
type: StringConstructor;
default: () => string;
};
iconNext: {
type: StringConstructor;
default: () => string;
};
breakpoints: {
type: PropType<Record<number, BreakpointOptions>>;
default: () => {};
};
}>> & {
"onUpdate:modelValue"?: ((_value: number) => any) | undefined;
onSwitch?: ((_value: number) => any) | undefined;
"onUpdated:scroll"?: ((_index: number) => any) | undefined;
}, {
data: any[];
repeat: boolean;
modelValue: number;
hasDrag: boolean;
arrow: boolean;
arrowHover: boolean;
iconPrev: string;
iconNext: string;
scrollValue: number;
hasGrayscale: boolean;
hasOpacity: boolean;
itemsToShow: number;
itemsToList: number;
asIndicator: boolean;
breakpoints: Record<number, Partial<BreakpointSettings>>;
}, {}>;

export declare const BCheckbox: DefineComponent<    {
indeterminate: BooleanConstructor;
ariaLabelledby: StringConstructor;
trueValue: {
type: (ArrayConstructor | NumberConstructor | StringConstructor | ObjectConstructor | BooleanConstructor | FunctionConstructor)[];
default: boolean;
};
falseValue: {
type: (ArrayConstructor | NumberConstructor | StringConstructor | ObjectConstructor | BooleanConstructor | FunctionConstructor)[];
default: boolean;
};
autocomplete: {
type: StringConstructor;
default: string;
};
inputId: {
type: StringConstructor;
default: string;
};
}, unknown, unknown, {}, {}, DefineComponent<    {
modelValue: (ArrayConstructor | NumberConstructor | StringConstructor | ObjectConstructor | BooleanConstructor | FunctionConstructor)[];
nativeValue: (ArrayConstructor | NumberConstructor | StringConstructor | ObjectConstructor | BooleanConstructor | FunctionConstructor)[];
type: StringConstructor;
disabled: BooleanConstructor;
required: BooleanConstructor;
name: StringConstructor;
size: StringConstructor;
}, unknown, {
newValue: string | number | boolean | Function | unknown[] | Record<string, any> | undefined;
}, {
computedValue: {
get(): string | number | boolean | Function | unknown[] | Record<string, any> | undefined;
set(value: any): void;
};
disabledOrUndefined(): true | undefined;
requiredOrUndefined(): true | undefined;
}, {
focus(): void;
}, ComponentOptionsMixin, ComponentOptionsMixin, {
'update:modelValue': (value: any) => true;
}, string, PublicProps, Readonly<ExtractPropTypes<    {
modelValue: (ArrayConstructor | NumberConstructor | StringConstructor | ObjectConstructor | BooleanConstructor | FunctionConstructor)[];
nativeValue: (ArrayConstructor | NumberConstructor | StringConstructor | ObjectConstructor | BooleanConstructor | FunctionConstructor)[];
type: StringConstructor;
disabled: BooleanConstructor;
required: BooleanConstructor;
name: StringConstructor;
size: StringConstructor;
}>> & {
"onUpdate:modelValue"?: ((value: any) => any) | undefined;
}, {
required: boolean;
disabled: boolean;
}, {}>, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {
indeterminate: BooleanConstructor;
ariaLabelledby: StringConstructor;
trueValue: {
type: (ArrayConstructor | NumberConstructor | StringConstructor | ObjectConstructor | BooleanConstructor | FunctionConstructor)[];
default: boolean;
};
falseValue: {
type: (ArrayConstructor | NumberConstructor | StringConstructor | ObjectConstructor | BooleanConstructor | FunctionConstructor)[];
default: boolean;
};
autocomplete: {
type: StringConstructor;
default: string;
};
inputId: {
type: StringConstructor;
default: string;
};
}>>, {
autocomplete: string;
indeterminate: boolean;
trueValue: string | number | boolean | Function | unknown[] | Record<string, any>;
falseValue: string | number | boolean | Function | unknown[] | Record<string, any>;
inputId: string;
}, {}>;

export declare const BCheckboxButton: DefineComponent<    {
type: {
type: StringConstructor;
default: string;
};
expanded: BooleanConstructor;
}, unknown, {
isFocused: boolean;
}, {
checked(): boolean;
}, {}, DefineComponent<    {
modelValue: (ArrayConstructor | NumberConstructor | StringConstructor | ObjectConstructor | BooleanConstructor | FunctionConstructor)[];
nativeValue: (ArrayConstructor | NumberConstructor | StringConstructor | ObjectConstructor | BooleanConstructor | FunctionConstructor)[];
type: StringConstructor;
disabled: BooleanConstructor;
required: BooleanConstructor;
name: StringConstructor;
size: StringConstructor;
}, unknown, {
newValue: string | number | boolean | Function | unknown[] | Record<string, any> | undefined;
}, {
computedValue: {
get(): string | number | boolean | Function | unknown[] | Record<string, any> | undefined;
set(value: any): void;
};
disabledOrUndefined(): true | undefined;
requiredOrUndefined(): true | undefined;
}, {
focus(): void;
}, ComponentOptionsMixin, ComponentOptionsMixin, {
'update:modelValue': (value: any) => true;
}, string, PublicProps, Readonly<ExtractPropTypes<    {
modelValue: (ArrayConstructor | NumberConstructor | StringConstructor | ObjectConstructor | BooleanConstructor | FunctionConstructor)[];
nativeValue: (ArrayConstructor | NumberConstructor | StringConstructor | ObjectConstructor | BooleanConstructor | FunctionConstructor)[];
type: StringConstructor;
disabled: BooleanConstructor;
required: BooleanConstructor;
name: StringConstructor;
size: StringConstructor;
}>> & {
"onUpdate:modelValue"?: ((value: any) => any) | undefined;
}, {
required: boolean;
disabled: boolean;
}, {}>, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {
type: {
type: StringConstructor;
default: string;
};
expanded: BooleanConstructor;
}>>, {
type: string;
expanded: boolean;
}, {}>;

export declare const BClockpicker: DefineComponent<    {
pickerSize: {
type: NumberConstructor;
default: number;
};
incrementMinutes: {
type: NumberConstructor;
default: number;
};
type: {
type: StringConstructor;
default: string;
};
hoursLabel: {
type: StringConstructor;
default: () => string;
};
minutesLabel: {
type: StringConstructor;
default: () => string;
};
}, unknown, {
isSelectingHour: boolean;
isDragging: boolean;
_isClockpicker: boolean;
}, {
hoursDisplay(): string | number;
minutesDisplay(): string;
minFaceValue(): 0 | 12;
maxFaceValue(): 11 | 59 | 23;
faceSize(): number;
faceDisabledValues(): (hour: number) => boolean;
}, {
onClockInput(value: number): void;
onClockChange(): void;
toggle(active: boolean): void;
onMeridienClick(value: string): void;
onInputClick(event: MouseEvent): void;
}, DefineComponent<    {
modelValue: PropType<Date | null>;
inline: BooleanConstructor;
minTime: PropType<Date | null>;
maxTime: PropType<Date | null>;
placeholder: StringConstructor;
editable: BooleanConstructor;
disabled: BooleanConstructor;
hourFormat: {
type: PropType<HourFormat>;
validator: (value: unknown) => value is "24" | "12";
};
incrementHours: {
type: NumberConstructor;
default: number;
};
incrementMinutes: {
type: NumberConstructor;
default: number;
};
incrementSeconds: {
type: NumberConstructor;
default: number;
};
timeFormatter: {
type: PropType<TimeFormatter>;
default: (date: Date, vm: ITimepickerMixin) => string;
};
timeParser: {
type: PropType<TimeParser>;
default: (date: string, vm: ITimepickerMixin) => Date | null;
};
mobileNative: {
type: BooleanConstructor;
default: () => boolean;
};
mobileModal: {
type: BooleanConstructor;
default: () => boolean;
};
timeCreator: {
type: PropType<TimeCreator>;
default: () => Date;
};
position: StringConstructor;
unselectableTimes: {
(arrayLength: number): Date[];
(...items: Date[]): Date[];
new (arrayLength: number): Date[];
new (...items: Date[]): Date[];
isArray(arg: any): arg is any[];
readonly prototype: any[];
from<T>(arrayLike: ArrayLike<T>): T[];
from<T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
from<T>(iterable: Iterable<T> | ArrayLike<T>): T[];
from<T, U>(iterable: Iterable<T> | ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
of<T>(...items: T[]): T[];
readonly [Symbol.species]: ArrayConstructor;
};
openOnFocus: BooleanConstructor;
enableSeconds: BooleanConstructor;
defaultMinutes: NumberConstructor;
defaultSeconds: NumberConstructor;
focusable: {
type: BooleanConstructor;
default: boolean;
};
tzOffset: {
type: NumberConstructor;
default: number;
};
appendToBody: BooleanConstructor;
resetOnMeridianChange: {
type: BooleanConstructor;
default: boolean;
};
}, unknown, {
dateSelected: Date | null | undefined;
hoursSelected: number | null;
minutesSelected: number | null;
secondsSelected: number | null;
meridienSelected: string | null;
_elementRef: string;
AM: string;
PM: string;
HOUR_FORMAT_24: string;
HOUR_FORMAT_12: string;
}, {
computedValue: {
get(): {
toString: () => string;
toDateString: () => string;
toTimeString: () => string;
toLocaleString: {
(): string;
(locales?: string | string[], options?: Intl.DateTimeFormatOptions): string;
(locales?: Intl.LocalesArgument, options?: Intl.DateTimeFormatOptions): string;
};
toLocaleDateString: {
(): string;
(locales?: string | string[], options?: Intl.DateTimeFormatOptions): string;
(locales?: Intl.LocalesArgument, options?: Intl.DateTimeFormatOptions): string;
};
toLocaleTimeString: {
(): string;
(locales?: string | string[], options?: Intl.DateTimeFormatOptions): string;
(locales?: Intl.LocalesArgument, options?: Intl.DateTimeFormatOptions): string;
};
valueOf: () => number;
getTime: () => number;
getFullYear: () => number;
getUTCFullYear: () => number;
getMonth: () => number;
getUTCMonth: () => number;
getDate: () => number;
getUTCDate: () => number;
getDay: () => number;
getUTCDay: () => number;
getHours: () => number;
getUTCHours: () => number;
getMinutes: () => number;
getUTCMinutes: () => number;
getSeconds: () => number;
getUTCSeconds: () => number;
getMilliseconds: () => number;
getUTCMilliseconds: () => number;
getTimezoneOffset: () => number;
setTime: (time: number) => number;
setMilliseconds: (ms: number) => number;
setUTCMilliseconds: (ms: number) => number;
setSeconds: (sec: number, ms?: number) => number;
setUTCSeconds: (sec: number, ms?: number) => number;
setMinutes: (min: number, sec?: number, ms?: number) => number;
setUTCMinutes: (min: number, sec?: number, ms?: number) => number;
setHours: (hours: number, min?: number, sec?: number, ms?: number) => number;
setUTCHours: (hours: number, min?: number, sec?: number, ms?: number) => number;
setDate: (date: number) => number;
setUTCDate: (date: number) => number;
setMonth: (month: number, date?: number) => number;
setUTCMonth: (month: number, date?: number) => number;
setFullYear: (year: number, month?: number, date?: number) => number;
setUTCFullYear: (year: number, month?: number, date?: number) => number;
toUTCString: () => string;
toISOString: () => string;
toJSON: (key?: any) => string;
[Symbol.toPrimitive]: {
(hint: "default"): string;
(hint: "string"): string;
(hint: "number"): number;
(hint: string): string | number;
};
} | null | undefined;
set(value: Date | null): void;
};
localeOptions(): Intl.DateTimeFormatOptions;
dtf(): Intl.DateTimeFormat;
newHourFormat(): HourFormat;
sampleTime(): Date;
hourLiteral(): string;
minuteLiteral(): string;
secondLiteral(): string | undefined;
amString(): string;
pmString(): string;
hours(): {
label: string;
value: number;
}[];
minutes(): {
label: string;
value: number;
}[];
seconds(): {
label: string;
value: number;
}[];
meridiens(): string[];
isMobile(): boolean | RegExpMatchArray | null;
isHourFormat24(): boolean;
disabledOrUndefined(): true | undefined;
}, {
onMeridienChange(value: string): void;
onHoursChange(value: number | string): void;
onMinutesChange(value: number | string): void;
onSecondsChange(value: number | string): void;
updateDateSelected(hours: number | null, minutes: number | null, seconds: number | null, meridiens: string | null): void;
updateInternalState(value?: Date | null): void;
isHourDisabled(hour: number): boolean;
isMinuteDisabledForHour(hour: number, minute: number): boolean;
isMinuteDisabled(minute: number): boolean;
isSecondDisabled(second: number): boolean;
onChange(value: string): void;
toggle(active: boolean): void;
close(): void;
handleOnFocus(): void;
formatHHMMSS(value: Date | null | undefined): string;
onChangeNativePicker(event: {
target: EventTarget;
}): void;
formatNumber(value: number, prependZero?: boolean): string;
pad(value: number): string;
formatValue(date: Date | null | undefined): string | null;
keyPress({ key }: {
key: KeyboardEvent["key"];
}): void;
onActiveChange(value: boolean): void;
}, DefineComponent<    {
compatFallthrough: {
type: BooleanConstructor;
default: () => boolean;
};
}, unknown, unknown, {
rootAttrs(): {
class: unknown;
style: StyleValue;
id: string | undefined;
} | {
class?: undefined;
style?: undefined;
id?: undefined;
};
fallthroughAttrs(): {
[x: string]: unknown;
};
}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {
compatFallthrough: {
type: BooleanConstructor;
default: () => boolean;
};
}>>, {
compatFallthrough: boolean;
}, {}> | DefineComponent<    {
size: StringConstructor;
expanded: BooleanConstructor;
loading: BooleanConstructor;
rounded: BooleanConstructor;
icon: StringConstructor;
iconPack: StringConstructor;
maxlength: (NumberConstructor | StringConstructor)[];
useHtml5Validation: {
type: BooleanConstructor;
default: () => boolean;
};
validationMessage: StringConstructor;
locale: {
type: (StringConstructor | {
(arrayLength: number): string[];
(...items: string[]): string[];
new (arrayLength: number): string[];
new (...items: string[]): string[];
isArray(arg: any): arg is any[];
readonly prototype: any[];
from<T>(arrayLike: ArrayLike<T>): T[];
from<T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
from<T>(iterable: Iterable<T> | ArrayLike<T>): T[];
from<T, U>(iterable: Iterable<T> | ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
of<T>(...items: T[]): T[];
readonly [Symbol.species]: ArrayConstructor;
})[];
default: () => string | string[] | null | undefined;
};
statusIcon: {
type: BooleanConstructor;
default: () => boolean;
};
}, unknown, {
isValid: boolean;
isFocused: boolean;
newIconPack: string;
_elementRef: string;
}, {
parentField(): CreateComponentPublicInstance<Readonly<ExtractPropTypes<    {
type: {
type: PropType<FieldTypeProp>;
default: undefined;
};
label: StringConstructor;
labelFor: StringConstructor;
message: {
type: PropType<FieldMessageProp>;
default: undefined;
};
grouped: BooleanConstructor;
groupMultiline: BooleanConstructor;
position: StringConstructor;
expanded: BooleanConstructor;
horizontal: BooleanConstructor;
addons: {
type: BooleanConstructor;
default: boolean;
};
customClass: StringConstructor;
labelPosition: {
type: StringConstructor;
default: () => FieldLabelPosition | null | undefined;
};
}>>, unknown, {
newType: FieldTypeProp | null;
newMessage: FieldMessageProp | null;
fieldLabelSize: string | null;
numberInputClasses: string[];
_isField: boolean;
}, {
rootClasses(): (string[] | {
'is-expanded': boolean;
'is-horizontal': boolean;
'is-floating-in-label': boolean | "" | undefined;
'is-floating-label': boolean | "" | undefined;
})[];
innerFieldClasses(): (string | {
'is-grouped-multiline': boolean;
} | undefined)[];
hasInnerField(): boolean;
newPosition(): string | undefined;
formattedMessage(): string[] | "";
hasLabel(): string | Slot<any> | undefined;
hasMessage(): Slot<any> | FieldMessagePropItem | FieldMessagePropItem[] | undefined;
}, {
fieldType(): "is-grouped" | "has-addons" | undefined;
hasAddons(): boolean;
wrapNumberinput({ controlsPosition, size }: {
controlsPosition?: string;
size?: string;
}): void;
}, ComponentOptionsMixin, ComponentOptionsMixin, {}, VNodeProps & AllowedComponentProps & ComponentCustomProps & Readonly<ExtractPropTypes<    {
type: {
type: PropType<FieldTypeProp>;
default: undefined;
};
label: StringConstructor;
labelFor: StringConstructor;
message: {
type: PropType<FieldMessageProp>;
default: undefined;
};
grouped: BooleanConstructor;
groupMultiline: BooleanConstructor;
position: StringConstructor;
expanded: BooleanConstructor;
horizontal: BooleanConstructor;
addons: {
type: BooleanConstructor;
default: boolean;
};
customClass: StringConstructor;
labelPosition: {
type: StringConstructor;
default: () => FieldLabelPosition | null | undefined;
};
}>>, {
type: FieldTypeProp;
expanded: boolean;
message: FieldMessageProp;
grouped: boolean;
groupMultiline: boolean;
horizontal: boolean;
addons: boolean;
labelPosition: string;
}, true, {}, {}, {
P: {};
B: {};
D: {};
C: {};
M: {};
Defaults: {};
}, Readonly<ExtractPropTypes<    {
type: {
type: PropType<FieldTypeProp>;
default: undefined;
};
label: StringConstructor;
labelFor: StringConstructor;
message: {
type: PropType<FieldMessageProp>;
default: undefined;
};
grouped: BooleanConstructor;
groupMultiline: BooleanConstructor;
position: StringConstructor;
expanded: BooleanConstructor;
horizontal: BooleanConstructor;
addons: {
type: BooleanConstructor;
default: boolean;
};
customClass: StringConstructor;
labelPosition: {
type: StringConstructor;
default: () => FieldLabelPosition | null | undefined;
};
}>>, {}, {
newType: FieldTypeProp | null;
newMessage: FieldMessageProp | null;
fieldLabelSize: string | null;
numberInputClasses: string[];
_isField: boolean;
}, {
rootClasses(): (string[] | {
'is-expanded': boolean;
'is-horizontal': boolean;
'is-floating-in-label': boolean | "" | undefined;
'is-floating-label': boolean | "" | undefined;
})[];
innerFieldClasses(): (string | {
'is-grouped-multiline': boolean;
} | undefined)[];
hasInnerField(): boolean;
newPosition(): string | undefined;
formattedMessage(): string[] | "";
hasLabel(): string | Slot<any> | undefined;
hasMessage(): Slot<any> | FieldMessagePropItem | FieldMessagePropItem[] | undefined;
}, {
fieldType(): "is-grouped" | "has-addons" | undefined;
hasAddons(): boolean;
wrapNumberinput({ controlsPosition, size }: {
controlsPosition?: string;
size?: string;
}): void;
}, {
type: FieldTypeProp;
expanded: boolean;
message: FieldMessageProp;
grouped: boolean;
groupMultiline: boolean;
horizontal: boolean;
addons: boolean;
labelPosition: string;
}> | undefined;
statusType(): string | undefined;
statusMessage(): Slot<any> | FieldMessagePropItem | FieldMessagePropItem[] | undefined;
iconSize(): "" | "is-medium" | "is-small" | undefined;
}, {
focus(): void;
onBlur($event?: Event): void;
onFocus($event?: Event): void;
getElement(): HTMLInputElement | HTMLButtonElement | HTMLFieldSetElement | HTMLOutputElement | HTMLSelectElement | HTMLTextAreaElement;
setInvalid(): void;
setValidity(type: FieldTypeProp | null, message: FieldMessageProp | null): void;
checkHtml5Validity(): boolean;
}, ComponentOptionsMixin, ComponentOptionsMixin, {
blur: (event?: Event) => true;
focus: (event?: Event) => true;
}, string, PublicProps, Readonly<ExtractPropTypes<    {
size: StringConstructor;
expanded: BooleanConstructor;
loading: BooleanConstructor;
rounded: BooleanConstructor;
icon: StringConstructor;
iconPack: StringConstructor;
maxlength: (NumberConstructor | StringConstructor)[];
useHtml5Validation: {
type: BooleanConstructor;
default: () => boolean;
};
validationMessage: StringConstructor;
locale: {
type: (StringConstructor | {
(arrayLength: number): string[];
(...items: string[]): string[];
new (arrayLength: number): string[];
new (...items: string[]): string[];
isArray(arg: any): arg is any[];
readonly prototype: any[];
from<T>(arrayLike: ArrayLike<T>): T[];
from<T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
from<T>(iterable: Iterable<T> | ArrayLike<T>): T[];
from<T, U>(iterable: Iterable<T> | ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
of<T>(...items: T[]): T[];
readonly [Symbol.species]: ArrayConstructor;
})[];
default: () => string | string[] | null | undefined;
};
statusIcon: {
type: BooleanConstructor;
default: () => boolean;
};
}>> & {
onFocus?: ((event?: Event | undefined) => any) | undefined;
onBlur?: ((event?: Event | undefined) => any) | undefined;
}, {
rounded: boolean;
loading: boolean;
expanded: boolean;
locale: string | string[];
useHtml5Validation: boolean;
statusIcon: boolean;
}, {}>, ComponentOptionsMixin, {
'update:modelValue': (_value: Date | null) => true;
}, string, PublicProps, Readonly<ExtractPropTypes<    {
modelValue: PropType<Date | null>;
inline: BooleanConstructor;
minTime: PropType<Date | null>;
maxTime: PropType<Date | null>;
placeholder: StringConstructor;
editable: BooleanConstructor;
disabled: BooleanConstructor;
hourFormat: {
type: PropType<HourFormat>;
validator: (value: unknown) => value is "24" | "12";
};
incrementHours: {
type: NumberConstructor;
default: number;
};
incrementMinutes: {
type: NumberConstructor;
default: number;
};
incrementSeconds: {
type: NumberConstructor;
default: number;
};
timeFormatter: {
type: PropType<TimeFormatter>;
default: (date: Date, vm: ITimepickerMixin) => string;
};
timeParser: {
type: PropType<TimeParser>;
default: (date: string, vm: ITimepickerMixin) => Date | null;
};
mobileNative: {
type: BooleanConstructor;
default: () => boolean;
};
mobileModal: {
type: BooleanConstructor;
default: () => boolean;
};
timeCreator: {
type: PropType<TimeCreator>;
default: () => Date;
};
position: StringConstructor;
unselectableTimes: {
(arrayLength: number): Date[];
(...items: Date[]): Date[];
new (arrayLength: number): Date[];
new (...items: Date[]): Date[];
isArray(arg: any): arg is any[];
readonly prototype: any[];
from<T>(arrayLike: ArrayLike<T>): T[];
from<T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
from<T>(iterable: Iterable<T> | ArrayLike<T>): T[];
from<T, U>(iterable: Iterable<T> | ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
of<T>(...items: T[]): T[];
readonly [Symbol.species]: ArrayConstructor;
};
openOnFocus: BooleanConstructor;
enableSeconds: BooleanConstructor;
defaultMinutes: NumberConstructor;
defaultSeconds: NumberConstructor;
focusable: {
type: BooleanConstructor;
default: boolean;
};
tzOffset: {
type: NumberConstructor;
default: number;
};
appendToBody: BooleanConstructor;
resetOnMeridianChange: {
type: BooleanConstructor;
default: boolean;
};
}>> & {
"onUpdate:modelValue"?: ((_value: Date | null) => any) | undefined;
}, {
disabled: boolean;
appendToBody: boolean;
openOnFocus: boolean;
inline: boolean;
mobileModal: boolean;
focusable: boolean;
editable: boolean;
incrementHours: number;
incrementMinutes: number;
incrementSeconds: number;
timeFormatter: TimeFormatter;
timeParser: TimeParser;
mobileNative: boolean;
timeCreator: TimeCreator;
enableSeconds: boolean;
tzOffset: number;
resetOnMeridianChange: boolean;
}, {}>, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {
pickerSize: {
type: NumberConstructor;
default: number;
};
incrementMinutes: {
type: NumberConstructor;
default: number;
};
type: {
type: StringConstructor;
default: string;
};
hoursLabel: {
type: StringConstructor;
default: () => string;
};
minutesLabel: {
type: StringConstructor;
default: () => string;
};
}>>, {
type: string;
incrementMinutes: number;
pickerSize: number;
hoursLabel: string;
minutesLabel: string;
}, {}>;

export declare const BCollapse: DefineComponent<    {
modelValue: {
type: BooleanConstructor;
default: boolean;
};
animation: {
type: StringConstructor;
default: string;
};
ariaId: {
type: StringConstructor;
default: string;
};
position: {
type: PropType<CollapsePosition>;
default: string;
validator(value: CollapsePosition): boolean;
};
}, unknown, {
isOpen: boolean;
}, {}, {
toggle(): void;
}, ComponentOptionsMixin, ComponentOptionsMixin, {
close: () => true;
open: () => true;
'update:modelValue': (_value: boolean) => true;
}, string, PublicProps, Readonly<ExtractPropTypes<    {
modelValue: {
type: BooleanConstructor;
default: boolean;
};
animation: {
type: StringConstructor;
default: string;
};
ariaId: {
type: StringConstructor;
default: string;
};
position: {
type: PropType<CollapsePosition>;
default: string;
validator(value: CollapsePosition): boolean;
};
}>> & {
onClose?: (() => any) | undefined;
"onUpdate:modelValue"?: ((_value: boolean) => any) | undefined;
onOpen?: (() => any) | undefined;
}, {
modelValue: boolean;
animation: string;
position: "is-top" | "is-bottom";
ariaId: string;
}, {}>;

export declare const BColorpicker: DefineComponent<{
    modelValue: {
        type: PropType<string | Rgb>;
        validator(value: string | Rgb): boolean;
    };
    mobileNative: {
        type: BooleanConstructor;
        default: boolean;
    };
    representation: {
        type: StringConstructor;
        default: string;
        value(value: string): boolean;
    };
    inline: BooleanConstructor;
    disabled: BooleanConstructor;
    horizontalColorPicker: {
        type: BooleanConstructor;
        default: boolean;
    };
    colorFormatter: {
        type: PropType<ColorFormatter>;
        default: (color: Color, vm?: IColorpicker) => string;
    };
    colorParser: {
        type: PropType<ColorParser>;
        default: (color: string, vm?: IColorpicker) => Color | null;
    };
    alpha: {
        type: BooleanConstructor;
        default: boolean;
    };
    expanded: BooleanConstructor;
    position: StringConstructor;
    mobileModal: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    focusable: {
        type: BooleanConstructor;
        default: boolean;
    };
    trapFocus: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    openOnFocus: BooleanConstructor;
    closeOnClick: BooleanConstructor;
    appendToBody: BooleanConstructor;
}, unknown, {
    color: any;
}, {
    computedValue: {
        set(value: string | Rgb): void;
        get(): any;
    };
    background(): string;
    triggerStyle(): {
        backgroundColor: string;
        backgroundImage: string;
        backgroundSize: string;
        backgroundPosition: string;
        color: string;
        textShadow: string;
    };
    isMobile(): boolean | RegExpMatchArray | null;
    ariaRole(): "dialog" | undefined;
}, {
    parseColor(color: string | Rgb | Color): Color;
    updateColor(value: Color): void;
    updateAlpha(alpha: number): void;
    updateRGB(): void;
    formatValue(value: Color): string | null;
    togglePicker(active: boolean): void;
    handleOnFocus(event: Event): void;
    onInputClick(event: Event): void;
    keyPress({ key }: KeyboardEvent): void;
    onActiveChange(value: boolean): void;
}, DefineComponent<{
    size: StringConstructor;
    expanded: BooleanConstructor;
    loading: BooleanConstructor;
    rounded: BooleanConstructor;
    icon: StringConstructor;
    iconPack: StringConstructor;
    maxlength: (NumberConstructor | StringConstructor)[];
    useHtml5Validation: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    validationMessage: StringConstructor;
    locale: {
        type: (StringConstructor | {
            (arrayLength: number): string[];
            (...items: string[]): string[];
            new (arrayLength: number): string[];
            new (...items: string[]): string[];
            isArray(arg: any): arg is any[];
            readonly prototype: any[];
            from<T>(arrayLike: ArrayLike<T>): T[];
            from<T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
            from<T>(iterable: Iterable<T> | ArrayLike<T>): T[];
            from<T, U>(iterable: Iterable<T> | ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
            of<T>(...items: T[]): T[];
            readonly [Symbol.species]: ArrayConstructor;
        })[];
        default: () => string | string[] | null | undefined;
    };
    statusIcon: {
        type: BooleanConstructor;
        default: () => boolean;
    };
}, unknown, {
    isValid: boolean;
    isFocused: boolean;
    newIconPack: string;
    _elementRef: string;
}, {
    parentField(): CreateComponentPublicInstance<Readonly<ExtractPropTypes<    {
    type: {
    type: PropType<FieldTypeProp>;
    default: undefined;
    };
    label: StringConstructor;
    labelFor: StringConstructor;
    message: {
    type: PropType<FieldMessageProp>;
    default: undefined;
    };
    grouped: BooleanConstructor;
    groupMultiline: BooleanConstructor;
    position: StringConstructor;
    expanded: BooleanConstructor;
    horizontal: BooleanConstructor;
    addons: {
    type: BooleanConstructor;
    default: boolean;
    };
    customClass: StringConstructor;
    labelPosition: {
    type: StringConstructor;
    default: () => FieldLabelPosition | null | undefined;
    };
    }>>, unknown, {
    newType: FieldTypeProp | null;
    newMessage: FieldMessageProp | null;
    fieldLabelSize: string | null;
    numberInputClasses: string[];
    _isField: boolean;
    }, {
    rootClasses(): (string[] | {
    'is-expanded': boolean;
    'is-horizontal': boolean;
    'is-floating-in-label': boolean | "" | undefined;
    'is-floating-label': boolean | "" | undefined;
    })[];
    innerFieldClasses(): (string | {
    'is-grouped-multiline': boolean;
    } | undefined)[];
    hasInnerField(): boolean;
    newPosition(): string | undefined;
    formattedMessage(): string[] | "";
    hasLabel(): string | Slot<any> | undefined;
    hasMessage(): Slot<any> | FieldMessagePropItem | FieldMessagePropItem[] | undefined;
    }, {
    fieldType(): "is-grouped" | "has-addons" | undefined;
    hasAddons(): boolean;
    wrapNumberinput({ controlsPosition, size }: {
    controlsPosition?: string;
    size?: string;
    }): void;
    }, ComponentOptionsMixin, ComponentOptionsMixin, {}, VNodeProps & AllowedComponentProps & ComponentCustomProps & Readonly<ExtractPropTypes<    {
    type: {
    type: PropType<FieldTypeProp>;
    default: undefined;
    };
    label: StringConstructor;
    labelFor: StringConstructor;
    message: {
    type: PropType<FieldMessageProp>;
    default: undefined;
    };
    grouped: BooleanConstructor;
    groupMultiline: BooleanConstructor;
    position: StringConstructor;
    expanded: BooleanConstructor;
    horizontal: BooleanConstructor;
    addons: {
    type: BooleanConstructor;
    default: boolean;
    };
    customClass: StringConstructor;
    labelPosition: {
    type: StringConstructor;
    default: () => FieldLabelPosition | null | undefined;
    };
    }>>, {
    type: FieldTypeProp;
    expanded: boolean;
    message: FieldMessageProp;
    grouped: boolean;
    groupMultiline: boolean;
    horizontal: boolean;
    addons: boolean;
    labelPosition: string;
    }, true, {}, {}, {
    P: {};
    B: {};
    D: {};
    C: {};
    M: {};
    Defaults: {};
    }, Readonly<ExtractPropTypes<    {
    type: {
    type: PropType<FieldTypeProp>;
    default: undefined;
    };
    label: StringConstructor;
    labelFor: StringConstructor;
    message: {
    type: PropType<FieldMessageProp>;
    default: undefined;
    };
    grouped: BooleanConstructor;
    groupMultiline: BooleanConstructor;
    position: StringConstructor;
    expanded: BooleanConstructor;
    horizontal: BooleanConstructor;
    addons: {
    type: BooleanConstructor;
    default: boolean;
    };
    customClass: StringConstructor;
    labelPosition: {
    type: StringConstructor;
    default: () => FieldLabelPosition | null | undefined;
    };
    }>>, {}, {
    newType: FieldTypeProp | null;
    newMessage: FieldMessageProp | null;
    fieldLabelSize: string | null;
    numberInputClasses: string[];
    _isField: boolean;
    }, {
    rootClasses(): (string[] | {
    'is-expanded': boolean;
    'is-horizontal': boolean;
    'is-floating-in-label': boolean | "" | undefined;
    'is-floating-label': boolean | "" | undefined;
    })[];
    innerFieldClasses(): (string | {
    'is-grouped-multiline': boolean;
    } | undefined)[];
    hasInnerField(): boolean;
    newPosition(): string | undefined;
    formattedMessage(): string[] | "";
    hasLabel(): string | Slot<any> | undefined;
    hasMessage(): Slot<any> | FieldMessagePropItem | FieldMessagePropItem[] | undefined;
    }, {
    fieldType(): "is-grouped" | "has-addons" | undefined;
    hasAddons(): boolean;
    wrapNumberinput({ controlsPosition, size }: {
    controlsPosition?: string;
    size?: string;
    }): void;
    }, {
    type: FieldTypeProp;
    expanded: boolean;
    message: FieldMessageProp;
    grouped: boolean;
    groupMultiline: boolean;
    horizontal: boolean;
    addons: boolean;
    labelPosition: string;
    }> | undefined;
    statusType(): string | undefined;
    statusMessage(): Slot<any> | FieldMessagePropItem | FieldMessagePropItem[] | undefined;
    iconSize(): "" | "is-medium" | "is-small" | undefined;
}, {
    focus(): void;
    onBlur($event?: Event): void;
    onFocus($event?: Event): void;
    getElement(): HTMLInputElement | HTMLButtonElement | HTMLFieldSetElement | HTMLOutputElement | HTMLSelectElement | HTMLTextAreaElement;
    setInvalid(): void;
    setValidity(type: FieldTypeProp | null, message: FieldMessageProp | null): void;
    checkHtml5Validity(): boolean;
}, ComponentOptionsMixin, ComponentOptionsMixin, {
    blur: (event?: Event) => true;
    focus: (event?: Event) => true;
}, string, PublicProps, Readonly<ExtractPropTypes<    {
size: StringConstructor;
expanded: BooleanConstructor;
loading: BooleanConstructor;
rounded: BooleanConstructor;
icon: StringConstructor;
iconPack: StringConstructor;
maxlength: (NumberConstructor | StringConstructor)[];
useHtml5Validation: {
type: BooleanConstructor;
default: () => boolean;
};
validationMessage: StringConstructor;
locale: {
type: (StringConstructor | {
(arrayLength: number): string[];
(...items: string[]): string[];
new (arrayLength: number): string[];
new (...items: string[]): string[];
isArray(arg: any): arg is any[];
readonly prototype: any[];
from<T>(arrayLike: ArrayLike<T>): T[];
from<T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
from<T>(iterable: Iterable<T> | ArrayLike<T>): T[];
from<T, U>(iterable: Iterable<T> | ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
of<T>(...items: T[]): T[];
readonly [Symbol.species]: ArrayConstructor;
})[];
default: () => string | string[] | null | undefined;
};
statusIcon: {
type: BooleanConstructor;
default: () => boolean;
};
}>> & {
    onFocus?: ((event?: Event | undefined) => any) | undefined;
    onBlur?: ((event?: Event | undefined) => any) | undefined;
}, {
    rounded: boolean;
    loading: boolean;
    expanded: boolean;
    locale: string | string[];
    useHtml5Validation: boolean;
    statusIcon: boolean;
}, {}>, ComponentOptionsMixin, {
    'active-change': (_active: boolean) => true;
    'update:modelValue': (_value: Color) => true;
}, string, PublicProps, Readonly<ExtractPropTypes<    {
modelValue: {
type: PropType<string | Rgb>;
validator(value: string | Rgb): boolean;
};
mobileNative: {
type: BooleanConstructor;
default: boolean;
};
representation: {
type: StringConstructor;
default: string;
value(value: string): boolean;
};
inline: BooleanConstructor;
disabled: BooleanConstructor;
horizontalColorPicker: {
type: BooleanConstructor;
default: boolean;
};
colorFormatter: {
type: PropType<ColorFormatter>;
default: (color: Color, vm?: IColorpicker) => string;
};
colorParser: {
type: PropType<ColorParser>;
default: (color: string, vm?: IColorpicker) => Color | null;
};
alpha: {
type: BooleanConstructor;
default: boolean;
};
expanded: BooleanConstructor;
position: StringConstructor;
mobileModal: {
type: BooleanConstructor;
default: () => boolean;
};
focusable: {
type: BooleanConstructor;
default: boolean;
};
trapFocus: {
type: BooleanConstructor;
default: () => boolean;
};
openOnFocus: BooleanConstructor;
closeOnClick: BooleanConstructor;
appendToBody: BooleanConstructor;
}>> & {
    "onUpdate:modelValue"?: ((_value: Color) => any) | undefined;
    "onActive-change"?: ((_active: boolean) => any) | undefined;
}, {
    alpha: boolean;
    trapFocus: boolean;
    expanded: boolean;
    disabled: boolean;
    appendToBody: boolean;
    openOnFocus: boolean;
    inline: boolean;
    mobileModal: boolean;
    closeOnClick: boolean;
    focusable: boolean;
    mobileNative: boolean;
    representation: string;
    horizontalColorPicker: boolean;
    colorFormatter: ColorFormatter;
    colorParser: ColorParser;
}, {}>;

export declare const BDatepicker: DefineComponent<    {
modelValue: {
type: PropType<Date | Date[] | null>;
};
dayNames: {
type: PropType<string[] | null>;
default: () => string[] | undefined;
};
monthNames: {
type: PropType<string[] | null>;
default: () => string[] | undefined;
};
firstDayOfWeek: {
type: NumberConstructor;
default: () => number;
};
inline: BooleanConstructor;
minDate: PropType<Date | null>;
maxDate: PropType<Date | null>;
focusedDate: DateConstructor;
placeholder: StringConstructor;
editable: BooleanConstructor;
disabled: BooleanConstructor;
horizontalTimePicker: BooleanConstructor;
unselectableDates: PropType<Date[] | DateSelector>;
unselectableDaysOfWeek: {
type: PropType<number[] | null>;
default: () => number[] | null | undefined;
};
selectableDates: PropType<Date[] | DateSelector>;
dateFormatter: {
type: PropType<DateFormatter>;
default: (date: Date, vm: IDatepicker) => string;
};
dateParser: {
type: PropType<DateParser>;
default: (date: string, vm: IDatepicker) => Date | null;
};
dateCreator: {
type: PropType<() => Date>;
default: () => Date;
};
mobileNative: {
type: BooleanConstructor;
default: () => boolean;
};
position: StringConstructor;
iconRight: StringConstructor;
iconRightClickable: BooleanConstructor;
events: {
(arrayLength: number): (Date | DatepickerEvent)[];
(...items: (Date | DatepickerEvent)[]): (Date | DatepickerEvent)[];
new (arrayLength: number): (Date | DatepickerEvent)[];
new (...items: (Date | DatepickerEvent)[]): (Date | DatepickerEvent)[];
isArray(arg: any): arg is any[];
readonly prototype: any[];
from<T>(arrayLike: ArrayLike<T>): T[];
from<T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
from<T>(iterable: Iterable<T> | ArrayLike<T>): T[];
from<T, U>(iterable: Iterable<T> | ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
of<T>(...items: T[]): T[];
readonly [Symbol.species]: ArrayConstructor;
};
indicators: {
type: StringConstructor;
default: string;
};
openOnFocus: BooleanConstructor;
iconPrev: {
type: StringConstructor;
default: () => string;
};
iconNext: {
type: StringConstructor;
default: () => string;
};
yearsRange: {
type: {
(arrayLength: number): number[];
(...items: number[]): number[];
new (arrayLength: number): number[];
new (...items: number[]): number[];
isArray(arg: any): arg is any[];
readonly prototype: any[];
from<T>(arrayLike: ArrayLike<T>): T[];
from<T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
from<T>(iterable: Iterable<T> | ArrayLike<T>): T[];
from<T, U>(iterable: Iterable<T> | ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
of<T>(...items: T[]): T[];
readonly [Symbol.species]: ArrayConstructor;
};
default: () => [number, number];
};
type: {
type: StringConstructor;
validator: (value: unknown) => boolean;
};
nearbyMonthDays: {
type: BooleanConstructor;
default: () => boolean;
};
nearbySelectableMonthDays: {
type: BooleanConstructor;
default: () => boolean;
};
showWeekNumber: {
type: BooleanConstructor;
default: () => boolean;
};
weekNumberClickable: {
type: BooleanConstructor;
default: () => boolean;
};
rulesForFirstWeek: {
type: NumberConstructor;
default: () => 4;
};
range: {
type: BooleanConstructor;
default: boolean;
};
closeOnClick: {
type: BooleanConstructor;
default: boolean;
};
multiple: {
type: BooleanConstructor;
default: boolean;
};
mobileModal: {
type: BooleanConstructor;
default: () => boolean;
};
focusable: {
type: BooleanConstructor;
default: boolean;
};
trapFocus: {
type: BooleanConstructor;
default: () => boolean;
};
appendToBody: BooleanConstructor;
ariaNextLabel: StringConstructor;
ariaPreviousLabel: StringConstructor;
}, unknown, {
dateSelected: Date | Date[] | null | undefined;
focusedDateData: FocusedDate;
_elementRef: string;
_isDatepicker: boolean;
}, {
computedValue: {
get(): {
toString: () => string;
toDateString: () => string;
toTimeString: () => string;
toLocaleString: {
(): string;
(locales?: string | string[], options?: Intl.DateTimeFormatOptions): string;
(locales?: Intl.LocalesArgument, options?: Intl.DateTimeFormatOptions): string;
};
toLocaleDateString: {
(): string;
(locales?: string | string[], options?: Intl.DateTimeFormatOptions): string;
(locales?: Intl.LocalesArgument, options?: Intl.DateTimeFormatOptions): string;
};
toLocaleTimeString: {
(): string;
(locales?: string | string[], options?: Intl.DateTimeFormatOptions): string;
(locales?: Intl.LocalesArgument, options?: Intl.DateTimeFormatOptions): string;
};
valueOf: () => number;
getTime: () => number;
getFullYear: () => number;
getUTCFullYear: () => number;
getMonth: () => number;
getUTCMonth: () => number;
getDate: () => number;
getUTCDate: () => number;
getDay: () => number;
getUTCDay: () => number;
getHours: () => number;
getUTCHours: () => number;
getMinutes: () => number;
getUTCMinutes: () => number;
getSeconds: () => number;
getUTCSeconds: () => number;
getMilliseconds: () => number;
getUTCMilliseconds: () => number;
getTimezoneOffset: () => number;
setTime: (time: number) => number;
setMilliseconds: (ms: number) => number;
setUTCMilliseconds: (ms: number) => number;
setSeconds: (sec: number, ms?: number) => number;
setUTCSeconds: (sec: number, ms?: number) => number;
setMinutes: (min: number, sec?: number, ms?: number) => number;
setUTCMinutes: (min: number, sec?: number, ms?: number) => number;
setHours: (hours: number, min?: number, sec?: number, ms?: number) => number;
setUTCHours: (hours: number, min?: number, sec?: number, ms?: number) => number;
setDate: (date: number) => number;
setUTCDate: (date: number) => number;
setMonth: (month: number, date?: number) => number;
setUTCMonth: (month: number, date?: number) => number;
setFullYear: (year: number, month?: number, date?: number) => number;
setUTCFullYear: (year: number, month?: number, date?: number) => number;
toUTCString: () => string;
toISOString: () => string;
toJSON: (key?: any) => string;
[Symbol.toPrimitive]: {
(hint: "default"): string;
(hint: "string"): string;
(hint: "number"): number;
(hint: string): string | number;
};
} | {
toString: () => string;
toDateString: () => string;
toTimeString: () => string;
toLocaleString: {
(): string;
(locales?: string | string[], options?: Intl.DateTimeFormatOptions): string;
(locales?: Intl.LocalesArgument, options?: Intl.DateTimeFormatOptions): string;
};
toLocaleDateString: {
(): string;
(locales?: string | string[], options?: Intl.DateTimeFormatOptions): string;
(locales?: Intl.LocalesArgument, options?: Intl.DateTimeFormatOptions): string;
};
toLocaleTimeString: {
(): string;
(locales?: string | string[], options?: Intl.DateTimeFormatOptions): string;
(locales?: Intl.LocalesArgument, options?: Intl.DateTimeFormatOptions): string;
};
valueOf: () => number;
getTime: () => number;
getFullYear: () => number;
getUTCFullYear: () => number;
getMonth: () => number;
getUTCMonth: () => number;
getDate: () => number;
getUTCDate: () => number;
getDay: () => number;
getUTCDay: () => number;
getHours: () => number;
getUTCHours: () => number;
getMinutes: () => number;
getUTCMinutes: () => number;
getSeconds: () => number;
getUTCSeconds: () => number;
getMilliseconds: () => number;
getUTCMilliseconds: () => number;
getTimezoneOffset: () => number;
setTime: (time: number) => number;
setMilliseconds: (ms: number) => number;
setUTCMilliseconds: (ms: number) => number;
setSeconds: (sec: number, ms?: number) => number;
setUTCSeconds: (sec: number, ms?: number) => number;
setMinutes: (min: number, sec?: number, ms?: number) => number;
setUTCMinutes: (min: number, sec?: number, ms?: number) => number;
setHours: (hours: number, min?: number, sec?: number, ms?: number) => number;
setUTCHours: (hours: number, min?: number, sec?: number, ms?: number) => number;
setDate: (date: number) => number;
setUTCDate: (date: number) => number;
setMonth: (month: number, date?: number) => number;
setUTCMonth: (month: number, date?: number) => number;
setFullYear: (year: number, month?: number, date?: number) => number;
setUTCFullYear: (year: number, month?: number, date?: number) => number;
toUTCString: () => string;
toISOString: () => string;
toJSON: (key?: any) => string;
[Symbol.toPrimitive]: {
(hint: "default"): string;
(hint: "string"): string;
(hint: "number"): number;
(hint: string): string | number;
};
}[] | null | undefined;
set(value: Date | Date[] | null | undefined): void;
};
formattedValue(): string | null;
localeOptions(): Intl.DateTimeFormatOptions;
dtf(): Intl.DateTimeFormat;
dtfMonth(): Intl.DateTimeFormat;
newMonthNames(): string[];
newDayNames(): string[];
listOfMonths(): MonthInfo[];
listOfYears(): number[];
showPrev(): boolean;
showNext(): boolean;
isMobile(): boolean | RegExpMatchArray | null;
isTypeMonth(): boolean;
ariaRole(): "dialog" | undefined;
disabledOrUndefined(): true | undefined;
}, {
onChange(value: string): void;
formatValue(value: Date | Date[] | null | undefined): string | null;
prev(): void;
next(): void;
formatNative(value: Date | null | undefined): string;
formatYYYYMMDD(value: Date | null | undefined): string;
formatYYYYMM(value: Date | null | undefined): string;
onChangeNativePicker(event: {
target?: {
value: string;
};
}): void;
updateInternalState(value: Date | Date[] | null | undefined): void;
togglePicker(active: boolean): void;
handleOnFocus(event?: Event): void;
toggle(): void;
onInputClick(event: MouseEvent): void;
keyPress({ key }: KeyboardEvent): void;
onActiveChange(value: boolean): void;
changeFocus(day: Date): void;
}, DefineComponent<    {
compatFallthrough: {
type: BooleanConstructor;
default: () => boolean;
};
}, unknown, unknown, {
rootAttrs(): {
class: unknown;
style: StyleValue;
id: string | undefined;
} | {
class?: undefined;
style?: undefined;
id?: undefined;
};
fallthroughAttrs(): {
[x: string]: unknown;
};
}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {
compatFallthrough: {
type: BooleanConstructor;
default: () => boolean;
};
}>>, {
compatFallthrough: boolean;
}, {}> | DefineComponent<    {
size: StringConstructor;
expanded: BooleanConstructor;
loading: BooleanConstructor;
rounded: BooleanConstructor;
icon: StringConstructor;
iconPack: StringConstructor;
maxlength: (NumberConstructor | StringConstructor)[];
useHtml5Validation: {
type: BooleanConstructor;
default: () => boolean;
};
validationMessage: StringConstructor;
locale: {
type: (StringConstructor | {
(arrayLength: number): string[];
(...items: string[]): string[];
new (arrayLength: number): string[];
new (...items: string[]): string[];
isArray(arg: any): arg is any[];
readonly prototype: any[];
from<T>(arrayLike: ArrayLike<T>): T[];
from<T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
from<T>(iterable: Iterable<T> | ArrayLike<T>): T[];
from<T, U>(iterable: Iterable<T> | ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
of<T>(...items: T[]): T[];
readonly [Symbol.species]: ArrayConstructor;
})[];
default: () => string | string[] | null | undefined;
};
statusIcon: {
type: BooleanConstructor;
default: () => boolean;
};
}, unknown, {
isValid: boolean;
isFocused: boolean;
newIconPack: string;
_elementRef: string;
}, {
parentField(): CreateComponentPublicInstance<Readonly<ExtractPropTypes<    {
type: {
type: PropType<FieldTypeProp>;
default: undefined;
};
label: StringConstructor;
labelFor: StringConstructor;
message: {
type: PropType<FieldMessageProp>;
default: undefined;
};
grouped: BooleanConstructor;
groupMultiline: BooleanConstructor;
position: StringConstructor;
expanded: BooleanConstructor;
horizontal: BooleanConstructor;
addons: {
type: BooleanConstructor;
default: boolean;
};
customClass: StringConstructor;
labelPosition: {
type: StringConstructor;
default: () => FieldLabelPosition | null | undefined;
};
}>>, unknown, {
newType: FieldTypeProp | null;
newMessage: FieldMessageProp | null;
fieldLabelSize: string | null;
numberInputClasses: string[];
_isField: boolean;
}, {
rootClasses(): (string[] | {
'is-expanded': boolean;
'is-horizontal': boolean;
'is-floating-in-label': boolean | "" | undefined;
'is-floating-label': boolean | "" | undefined;
})[];
innerFieldClasses(): (string | {
'is-grouped-multiline': boolean;
} | undefined)[];
hasInnerField(): boolean;
newPosition(): string | undefined;
formattedMessage(): string[] | "";
hasLabel(): string | Slot<any> | undefined;
hasMessage(): Slot<any> | FieldMessagePropItem | FieldMessagePropItem[] | undefined;
}, {
fieldType(): "is-grouped" | "has-addons" | undefined;
hasAddons(): boolean;
wrapNumberinput({ controlsPosition, size }: {
controlsPosition?: string;
size?: string;
}): void;
}, ComponentOptionsMixin, ComponentOptionsMixin, {}, VNodeProps & AllowedComponentProps & ComponentCustomProps & Readonly<ExtractPropTypes<    {
type: {
type: PropType<FieldTypeProp>;
default: undefined;
};
label: StringConstructor;
labelFor: StringConstructor;
message: {
type: PropType<FieldMessageProp>;
default: undefined;
};
grouped: BooleanConstructor;
groupMultiline: BooleanConstructor;
position: StringConstructor;
expanded: BooleanConstructor;
horizontal: BooleanConstructor;
addons: {
type: BooleanConstructor;
default: boolean;
};
customClass: StringConstructor;
labelPosition: {
type: StringConstructor;
default: () => FieldLabelPosition | null | undefined;
};
}>>, {
type: FieldTypeProp;
expanded: boolean;
message: FieldMessageProp;
grouped: boolean;
groupMultiline: boolean;
horizontal: boolean;
addons: boolean;
labelPosition: string;
}, true, {}, {}, {
P: {};
B: {};
D: {};
C: {};
M: {};
Defaults: {};
}, Readonly<ExtractPropTypes<    {
type: {
type: PropType<FieldTypeProp>;
default: undefined;
};
label: StringConstructor;
labelFor: StringConstructor;
message: {
type: PropType<FieldMessageProp>;
default: undefined;
};
grouped: BooleanConstructor;
groupMultiline: BooleanConstructor;
position: StringConstructor;
expanded: BooleanConstructor;
horizontal: BooleanConstructor;
addons: {
type: BooleanConstructor;
default: boolean;
};
customClass: StringConstructor;
labelPosition: {
type: StringConstructor;
default: () => FieldLabelPosition | null | undefined;
};
}>>, {}, {
newType: FieldTypeProp | null;
newMessage: FieldMessageProp | null;
fieldLabelSize: string | null;
numberInputClasses: string[];
_isField: boolean;
}, {
rootClasses(): (string[] | {
'is-expanded': boolean;
'is-horizontal': boolean;
'is-floating-in-label': boolean | "" | undefined;
'is-floating-label': boolean | "" | undefined;
})[];
innerFieldClasses(): (string | {
'is-grouped-multiline': boolean;
} | undefined)[];
hasInnerField(): boolean;
newPosition(): string | undefined;
formattedMessage(): string[] | "";
hasLabel(): string | Slot<any> | undefined;
hasMessage(): Slot<any> | FieldMessagePropItem | FieldMessagePropItem[] | undefined;
}, {
fieldType(): "is-grouped" | "has-addons" | undefined;
hasAddons(): boolean;
wrapNumberinput({ controlsPosition, size }: {
controlsPosition?: string;
size?: string;
}): void;
}, {
type: FieldTypeProp;
expanded: boolean;
message: FieldMessageProp;
grouped: boolean;
groupMultiline: boolean;
horizontal: boolean;
addons: boolean;
labelPosition: string;
}> | undefined;
statusType(): string | undefined;
statusMessage(): Slot<any> | FieldMessagePropItem | FieldMessagePropItem[] | undefined;
iconSize(): "" | "is-medium" | "is-small" | undefined;
}, {
focus(): void;
onBlur($event?: Event): void;
onFocus($event?: Event): void;
getElement(): HTMLInputElement | HTMLButtonElement | HTMLFieldSetElement | HTMLOutputElement | HTMLSelectElement | HTMLTextAreaElement;
setInvalid(): void;
setValidity(type: FieldTypeProp | null, message: FieldMessageProp | null): void;
checkHtml5Validity(): boolean;
}, ComponentOptionsMixin, ComponentOptionsMixin, {
blur: (event?: Event) => true;
focus: (event?: Event) => true;
}, string, PublicProps, Readonly<ExtractPropTypes<    {
size: StringConstructor;
expanded: BooleanConstructor;
loading: BooleanConstructor;
rounded: BooleanConstructor;
icon: StringConstructor;
iconPack: StringConstructor;
maxlength: (NumberConstructor | StringConstructor)[];
useHtml5Validation: {
type: BooleanConstructor;
default: () => boolean;
};
validationMessage: StringConstructor;
locale: {
type: (StringConstructor | {
(arrayLength: number): string[];
(...items: string[]): string[];
new (arrayLength: number): string[];
new (...items: string[]): string[];
isArray(arg: any): arg is any[];
readonly prototype: any[];
from<T>(arrayLike: ArrayLike<T>): T[];
from<T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
from<T>(iterable: Iterable<T> | ArrayLike<T>): T[];
from<T, U>(iterable: Iterable<T> | ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
of<T>(...items: T[]): T[];
readonly [Symbol.species]: ArrayConstructor;
})[];
default: () => string | string[] | null | undefined;
};
statusIcon: {
type: BooleanConstructor;
default: () => boolean;
};
}>> & {
onFocus?: ((event?: Event | undefined) => any) | undefined;
onBlur?: ((event?: Event | undefined) => any) | undefined;
}, {
rounded: boolean;
loading: boolean;
expanded: boolean;
locale: string | string[];
useHtml5Validation: boolean;
statusIcon: boolean;
}, {}>, ComponentOptionsMixin, {
'active-change': (_active: boolean) => true;
'change-month': (_month: number) => true;
'change-year': (_year: number) => true;
'icon-right-click': (_event: MouseEvent) => true;
'range-end': (_date: Date) => true;
'range-start': (_date: Date) => true;
'update:modelValue': (_value: Date | Date[] | null | undefined) => true;
'week-number-click': (_week: number, _year: number) => true;
}, string, PublicProps, Readonly<ExtractPropTypes<    {
modelValue: {
type: PropType<Date | Date[] | null>;
};
dayNames: {
type: PropType<string[] | null>;
default: () => string[] | undefined;
};
monthNames: {
type: PropType<string[] | null>;
default: () => string[] | undefined;
};
firstDayOfWeek: {
type: NumberConstructor;
default: () => number;
};
inline: BooleanConstructor;
minDate: PropType<Date | null>;
maxDate: PropType<Date | null>;
focusedDate: DateConstructor;
placeholder: StringConstructor;
editable: BooleanConstructor;
disabled: BooleanConstructor;
horizontalTimePicker: BooleanConstructor;
unselectableDates: PropType<Date[] | DateSelector>;
unselectableDaysOfWeek: {
type: PropType<number[] | null>;
default: () => number[] | null | undefined;
};
selectableDates: PropType<Date[] | DateSelector>;
dateFormatter: {
type: PropType<DateFormatter>;
default: (date: Date, vm: IDatepicker) => string;
};
dateParser: {
type: PropType<DateParser>;
default: (date: string, vm: IDatepicker) => Date | null;
};
dateCreator: {
type: PropType<() => Date>;
default: () => Date;
};
mobileNative: {
type: BooleanConstructor;
default: () => boolean;
};
position: StringConstructor;
iconRight: StringConstructor;
iconRightClickable: BooleanConstructor;
events: {
(arrayLength: number): (Date | DatepickerEvent)[];
(...items: (Date | DatepickerEvent)[]): (Date | DatepickerEvent)[];
new (arrayLength: number): (Date | DatepickerEvent)[];
new (...items: (Date | DatepickerEvent)[]): (Date | DatepickerEvent)[];
isArray(arg: any): arg is any[];
readonly prototype: any[];
from<T>(arrayLike: ArrayLike<T>): T[];
from<T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
from<T>(iterable: Iterable<T> | ArrayLike<T>): T[];
from<T, U>(iterable: Iterable<T> | ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
of<T>(...items: T[]): T[];
readonly [Symbol.species]: ArrayConstructor;
};
indicators: {
type: StringConstructor;
default: string;
};
openOnFocus: BooleanConstructor;
iconPrev: {
type: StringConstructor;
default: () => string;
};
iconNext: {
type: StringConstructor;
default: () => string;
};
yearsRange: {
type: {
(arrayLength: number): number[];
(...items: number[]): number[];
new (arrayLength: number): number[];
new (...items: number[]): number[];
isArray(arg: any): arg is any[];
readonly prototype: any[];
from<T>(arrayLike: ArrayLike<T>): T[];
from<T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
from<T>(iterable: Iterable<T> | ArrayLike<T>): T[];
from<T, U>(iterable: Iterable<T> | ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
of<T>(...items: T[]): T[];
readonly [Symbol.species]: ArrayConstructor;
};
default: () => [number, number];
};
type: {
type: StringConstructor;
validator: (value: unknown) => boolean;
};
nearbyMonthDays: {
type: BooleanConstructor;
default: () => boolean;
};
nearbySelectableMonthDays: {
type: BooleanConstructor;
default: () => boolean;
};
showWeekNumber: {
type: BooleanConstructor;
default: () => boolean;
};
weekNumberClickable: {
type: BooleanConstructor;
default: () => boolean;
};
rulesForFirstWeek: {
type: NumberConstructor;
default: () => 4;
};
range: {
type: BooleanConstructor;
default: boolean;
};
closeOnClick: {
type: BooleanConstructor;
default: boolean;
};
multiple: {
type: BooleanConstructor;
default: boolean;
};
mobileModal: {
type: BooleanConstructor;
default: () => boolean;
};
focusable: {
type: BooleanConstructor;
default: boolean;
};
trapFocus: {
type: BooleanConstructor;
default: () => boolean;
};
appendToBody: BooleanConstructor;
ariaNextLabel: StringConstructor;
ariaPreviousLabel: StringConstructor;
}>> & {
"onUpdate:modelValue"?: ((_value: Date | Date[] | null | undefined) => any) | undefined;
"onIcon-right-click"?: ((_event: MouseEvent) => any) | undefined;
"onActive-change"?: ((_active: boolean) => any) | undefined;
"onRange-end"?: ((_date: Date) => any) | undefined;
"onRange-start"?: ((_date: Date) => any) | undefined;
"onWeek-number-click"?: ((_week: number, _year: number) => any) | undefined;
"onChange-month"?: ((_month: number) => any) | undefined;
"onChange-year"?: ((_year: number) => any) | undefined;
}, {
trapFocus: boolean;
disabled: boolean;
iconRightClickable: boolean;
range: boolean;
appendToBody: boolean;
openOnFocus: boolean;
iconPrev: string;
iconNext: string;
inline: boolean;
mobileModal: boolean;
multiple: boolean;
closeOnClick: boolean;
focusable: boolean;
editable: boolean;
mobileNative: boolean;
indicators: string;
nearbyMonthDays: boolean;
nearbySelectableMonthDays: boolean;
showWeekNumber: boolean;
weekNumberClickable: boolean;
rulesForFirstWeek: number;
unselectableDaysOfWeek: number[] | null;
dateCreator: () => Date;
firstDayOfWeek: number;
dayNames: string[] | null;
monthNames: string[] | null;
horizontalTimePicker: boolean;
dateFormatter: DateFormatter;
dateParser: DateParser;
yearsRange: number[];
}, {}>;

export declare const BDatetimepicker: DefineComponent<    {
modelValue: {
type: PropType<Date | null>;
};
editable: {
type: BooleanConstructor;
default: boolean;
};
placeholder: StringConstructor;
horizontalTimePicker: BooleanConstructor;
disabled: BooleanConstructor;
firstDayOfWeek: {
type: NumberConstructor;
default: () => number;
};
rulesForFirstWeek: {
type: NumberConstructor;
default: () => number;
};
icon: StringConstructor;
iconRight: StringConstructor;
iconRightClickable: BooleanConstructor;
iconPack: StringConstructor;
inline: BooleanConstructor;
openOnFocus: BooleanConstructor;
position: StringConstructor;
mobileNative: {
type: BooleanConstructor;
default: boolean;
};
minDatetime: DateConstructor;
maxDatetime: DateConstructor;
nearbyMonthDays: {
type: BooleanConstructor;
default: boolean;
};
datetimeFormatter: {
type: PropType<DatetimeFormatter>;
};
datetimeParser: {
type: PropType<DatetimeParser>;
};
datetimeCreator: {
type: PropType<DatetimeCreator>;
default: (date: Date) => Date;
};
datepicker: ObjectConstructor;
timepicker: ObjectConstructor;
tzOffset: {
type: NumberConstructor;
default: number;
};
focusable: {
type: BooleanConstructor;
default: boolean;
};
appendToBody: BooleanConstructor;
}, unknown, {
newValue: any;
}, {
computedValue: {
get(): any;
set(value: Date | null): void;
};
localeOptions(): Intl.DateTimeFormatOptions;
dtf(): Intl.DateTimeFormat;
isMobileNative(): boolean;
isMobile(): boolean | RegExpMatchArray | null;
minDate(): Date | null | undefined;
maxDate(): Date | null | undefined;
minTime(): Date | null | undefined;
maxTime(): Date | null | undefined;
datepickerSize(): any;
timepickerSize(): any;
timepickerDisabled(): any;
disabledOrUndefined(): true | undefined;
}, {
enableSeconds(): boolean;
isHourFormat24(): boolean;
adjustValue(value: Date | null | undefined, reverse?: boolean): Date | null | undefined;
defaultDatetimeParser(date: string): Date | null;
defaultDatetimeFormatter(date: Date | Date[]): string;
onChangeNativePicker(event: {
target: {
value: string;
};
}): void;
onActiveChange(value: boolean): void;
formatNative(value: Date | null | undefined): string;
toggle(): void;
}, DefineComponent<    {
size: StringConstructor;
expanded: BooleanConstructor;
loading: BooleanConstructor;
rounded: BooleanConstructor;
icon: StringConstructor;
iconPack: StringConstructor;
maxlength: (NumberConstructor | StringConstructor)[];
useHtml5Validation: {
type: BooleanConstructor;
default: () => boolean;
};
validationMessage: StringConstructor;
locale: {
type: (StringConstructor | {
(arrayLength: number): string[];
(...items: string[]): string[];
new (arrayLength: number): string[];
new (...items: string[]): string[];
isArray(arg: any): arg is any[];
readonly prototype: any[];
from<T>(arrayLike: ArrayLike<T>): T[];
from<T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
from<T>(iterable: Iterable<T> | ArrayLike<T>): T[];
from<T, U>(iterable: Iterable<T> | ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
of<T>(...items: T[]): T[];
readonly [Symbol.species]: ArrayConstructor;
})[];
default: () => string | string[] | null | undefined;
};
statusIcon: {
type: BooleanConstructor;
default: () => boolean;
};
}, unknown, {
isValid: boolean;
isFocused: boolean;
newIconPack: string;
_elementRef: string;
}, {
parentField(): CreateComponentPublicInstance<Readonly<ExtractPropTypes<    {
type: {
type: PropType<FieldTypeProp>;
default: undefined;
};
label: StringConstructor;
labelFor: StringConstructor;
message: {
type: PropType<FieldMessageProp>;
default: undefined;
};
grouped: BooleanConstructor;
groupMultiline: BooleanConstructor;
position: StringConstructor;
expanded: BooleanConstructor;
horizontal: BooleanConstructor;
addons: {
type: BooleanConstructor;
default: boolean;
};
customClass: StringConstructor;
labelPosition: {
type: StringConstructor;
default: () => FieldLabelPosition | null | undefined;
};
}>>, unknown, {
newType: FieldTypeProp | null;
newMessage: FieldMessageProp | null;
fieldLabelSize: string | null;
numberInputClasses: string[];
_isField: boolean;
}, {
rootClasses(): (string[] | {
'is-expanded': boolean;
'is-horizontal': boolean;
'is-floating-in-label': boolean | "" | undefined;
'is-floating-label': boolean | "" | undefined;
})[];
innerFieldClasses(): (string | {
'is-grouped-multiline': boolean;
} | undefined)[];
hasInnerField(): boolean;
newPosition(): string | undefined;
formattedMessage(): string[] | "";
hasLabel(): string | Slot<any> | undefined;
hasMessage(): Slot<any> | FieldMessagePropItem | FieldMessagePropItem[] | undefined;
}, {
fieldType(): "is-grouped" | "has-addons" | undefined;
hasAddons(): boolean;
wrapNumberinput({ controlsPosition, size }: {
controlsPosition?: string;
size?: string;
}): void;
}, ComponentOptionsMixin, ComponentOptionsMixin, {}, VNodeProps & AllowedComponentProps & ComponentCustomProps & Readonly<ExtractPropTypes<    {
type: {
type: PropType<FieldTypeProp>;
default: undefined;
};
label: StringConstructor;
labelFor: StringConstructor;
message: {
type: PropType<FieldMessageProp>;
default: undefined;
};
grouped: BooleanConstructor;
groupMultiline: BooleanConstructor;
position: StringConstructor;
expanded: BooleanConstructor;
horizontal: BooleanConstructor;
addons: {
type: BooleanConstructor;
default: boolean;
};
customClass: StringConstructor;
labelPosition: {
type: StringConstructor;
default: () => FieldLabelPosition | null | undefined;
};
}>>, {
type: FieldTypeProp;
expanded: boolean;
message: FieldMessageProp;
grouped: boolean;
groupMultiline: boolean;
horizontal: boolean;
addons: boolean;
labelPosition: string;
}, true, {}, {}, {
P: {};
B: {};
D: {};
C: {};
M: {};
Defaults: {};
}, Readonly<ExtractPropTypes<    {
type: {
type: PropType<FieldTypeProp>;
default: undefined;
};
label: StringConstructor;
labelFor: StringConstructor;
message: {
type: PropType<FieldMessageProp>;
default: undefined;
};
grouped: BooleanConstructor;
groupMultiline: BooleanConstructor;
position: StringConstructor;
expanded: BooleanConstructor;
horizontal: BooleanConstructor;
addons: {
type: BooleanConstructor;
default: boolean;
};
customClass: StringConstructor;
labelPosition: {
type: StringConstructor;
default: () => FieldLabelPosition | null | undefined;
};
}>>, {}, {
newType: FieldTypeProp | null;
newMessage: FieldMessageProp | null;
fieldLabelSize: string | null;
numberInputClasses: string[];
_isField: boolean;
}, {
rootClasses(): (string[] | {
'is-expanded': boolean;
'is-horizontal': boolean;
'is-floating-in-label': boolean | "" | undefined;
'is-floating-label': boolean | "" | undefined;
})[];
innerFieldClasses(): (string | {
'is-grouped-multiline': boolean;
} | undefined)[];
hasInnerField(): boolean;
newPosition(): string | undefined;
formattedMessage(): string[] | "";
hasLabel(): string | Slot<any> | undefined;
hasMessage(): Slot<any> | FieldMessagePropItem | FieldMessagePropItem[] | undefined;
}, {
fieldType(): "is-grouped" | "has-addons" | undefined;
hasAddons(): boolean;
wrapNumberinput({ controlsPosition, size }: {
controlsPosition?: string;
size?: string;
}): void;
}, {
type: FieldTypeProp;
expanded: boolean;
message: FieldMessageProp;
grouped: boolean;
groupMultiline: boolean;
horizontal: boolean;
addons: boolean;
labelPosition: string;
}> | undefined;
statusType(): string | undefined;
statusMessage(): Slot<any> | FieldMessagePropItem | FieldMessagePropItem[] | undefined;
iconSize(): "" | "is-medium" | "is-small" | undefined;
}, {
focus(): void;
onBlur($event?: Event): void;
onFocus($event?: Event): void;
getElement(): HTMLInputElement | HTMLButtonElement | HTMLFieldSetElement | HTMLOutputElement | HTMLSelectElement | HTMLTextAreaElement;
setInvalid(): void;
setValidity(type: FieldTypeProp | null, message: FieldMessageProp | null): void;
checkHtml5Validity(): boolean;
}, ComponentOptionsMixin, ComponentOptionsMixin, {
blur: (event?: Event) => true;
focus: (event?: Event) => true;
}, string, PublicProps, Readonly<ExtractPropTypes<    {
size: StringConstructor;
expanded: BooleanConstructor;
loading: BooleanConstructor;
rounded: BooleanConstructor;
icon: StringConstructor;
iconPack: StringConstructor;
maxlength: (NumberConstructor | StringConstructor)[];
useHtml5Validation: {
type: BooleanConstructor;
default: () => boolean;
};
validationMessage: StringConstructor;
locale: {
type: (StringConstructor | {
(arrayLength: number): string[];
(...items: string[]): string[];
new (arrayLength: number): string[];
new (...items: string[]): string[];
isArray(arg: any): arg is any[];
readonly prototype: any[];
from<T>(arrayLike: ArrayLike<T>): T[];
from<T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
from<T>(iterable: Iterable<T> | ArrayLike<T>): T[];
from<T, U>(iterable: Iterable<T> | ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
of<T>(...items: T[]): T[];
readonly [Symbol.species]: ArrayConstructor;
})[];
default: () => string | string[] | null | undefined;
};
statusIcon: {
type: BooleanConstructor;
default: () => boolean;
};
}>> & {
onFocus?: ((event?: Event | undefined) => any) | undefined;
onBlur?: ((event?: Event | undefined) => any) | undefined;
}, {
rounded: boolean;
loading: boolean;
expanded: boolean;
locale: string | string[];
useHtml5Validation: boolean;
statusIcon: boolean;
}, {}>, ComponentOptionsMixin, {
'active-change': (_active: boolean) => true;
'change-month': (_month: number) => true;
'change-year': (_year: number) => true;
'icon-right-click': () => true;
'update:modelValue': (_value: Date | null | undefined) => true;
}, string, PublicProps, Readonly<ExtractPropTypes<    {
modelValue: {
type: PropType<Date | null>;
};
editable: {
type: BooleanConstructor;
default: boolean;
};
placeholder: StringConstructor;
horizontalTimePicker: BooleanConstructor;
disabled: BooleanConstructor;
firstDayOfWeek: {
type: NumberConstructor;
default: () => number;
};
rulesForFirstWeek: {
type: NumberConstructor;
default: () => number;
};
icon: StringConstructor;
iconRight: StringConstructor;
iconRightClickable: BooleanConstructor;
iconPack: StringConstructor;
inline: BooleanConstructor;
openOnFocus: BooleanConstructor;
position: StringConstructor;
mobileNative: {
type: BooleanConstructor;
default: boolean;
};
minDatetime: DateConstructor;
maxDatetime: DateConstructor;
nearbyMonthDays: {
type: BooleanConstructor;
default: boolean;
};
datetimeFormatter: {
type: PropType<DatetimeFormatter>;
};
datetimeParser: {
type: PropType<DatetimeParser>;
};
datetimeCreator: {
type: PropType<DatetimeCreator>;
default: (date: Date) => Date;
};
datepicker: ObjectConstructor;
timepicker: ObjectConstructor;
tzOffset: {
type: NumberConstructor;
default: number;
};
focusable: {
type: BooleanConstructor;
default: boolean;
};
appendToBody: BooleanConstructor;
}>> & {
"onUpdate:modelValue"?: ((_value: Date | null | undefined) => any) | undefined;
"onIcon-right-click"?: (() => any) | undefined;
"onActive-change"?: ((_active: boolean) => any) | undefined;
"onChange-month"?: ((_month: number) => any) | undefined;
"onChange-year"?: ((_year: number) => any) | undefined;
}, {
disabled: boolean;
iconRightClickable: boolean;
appendToBody: boolean;
openOnFocus: boolean;
inline: boolean;
focusable: boolean;
editable: boolean;
mobileNative: boolean;
tzOffset: number;
nearbyMonthDays: boolean;
rulesForFirstWeek: number;
firstDayOfWeek: number;
horizontalTimePicker: boolean;
datetimeCreator: DatetimeCreator;
}, {}>;

export declare const BDialog: DefineComponent<    {
customClass: {
type: StringConstructor;
default: string;
};
customContentClass: {
type: StringConstructor;
default: string;
};
title: StringConstructor;
message: (ArrayConstructor | StringConstructor)[];
icon: StringConstructor;
iconPack: StringConstructor;
hasIcon: BooleanConstructor;
type: {
type: StringConstructor;
default: string;
};
size: StringConstructor;
confirmText: {
type: StringConstructor;
default: () => string;
};
cancelText: {
type: StringConstructor;
default: () => string;
};
hasInput: BooleanConstructor;
inputAttrs: {
type: ObjectConstructor;
default: () => {};
};
confirmCallback: {
type: PropType<(value: string, dialog: any) => void>;
default: () => void;
};
closeOnConfirm: {
type: BooleanConstructor;
default: boolean;
};
container: {
type: StringConstructor;
default: () => string | null | undefined;
};
focusOn: {
type: StringConstructor;
default: string;
};
}, unknown, {
prompt: any;
isActive: boolean;
validationMessage: string;
isCompositing: boolean;
isLoading: boolean;
}, {
safeInputAttrs(): {
[x: string]: any;
};
dialogClass(): (string | {
'has-custom-container': boolean;
} | undefined)[];
iconByType(): "information" | "check-circle" | "alert" | "alert-circle" | null;
showCancel(): boolean;
}, {
confirm(): void;
close(): void;
startLoading(): void;
cancelLoading(): void;
}, ComponentOptionsMixin, DefineComponent<    {
modelValue: BooleanConstructor;
component: (StringConstructor | ObjectConstructor | FunctionConstructor)[];
content: {
type: PropType<string | VNode | (string | VNode)[]>;
};
programmatic: BooleanConstructor;
props: ObjectConstructor;
events: {
type: ObjectConstructor;
default(): {};
};
width: {
type: (NumberConstructor | StringConstructor)[];
default: number;
};
hasModalCard: BooleanConstructor;
animation: {
type: StringConstructor;
default: string;
};
canCancel: {
type: PropType<boolean | ModalCancellableOption[]>;
default: () => ModalCancellableOption[];
};
cancelCallback: {
type: PropType<(method: ModalCancellableOption) => void>;
default: () => void;
};
scroll: {
type: PropType<"clip" | "keep">;
default: () => ModalScrollOption;
validator: (value: unknown) => value is "clip" | "keep";
};
fullScreen: BooleanConstructor;
trapFocus: {
type: BooleanConstructor;
default: () => boolean;
};
autoFocus: {
type: BooleanConstructor;
default: () => boolean;
};
customClass: StringConstructor;
customContentClass: (ArrayConstructor | StringConstructor | ObjectConstructor)[];
ariaRole: {
type: PropType<"dialog" | "alertdialog">;
validator: (value: unknown) => value is "dialog" | "alertdialog";
};
ariaModal: BooleanConstructor;
ariaLabel: {
type: StringConstructor;
validator: (value: unknown) => boolean;
};
closeButtonAriaLabel: {
type: StringConstructor;
default: string;
};
destroyOnHide: {
type: BooleanConstructor;
default: boolean;
};
renderOnMounted: {
type: BooleanConstructor;
default: boolean;
};
}, unknown, {
isActive: boolean;
savedScrollTop: number | null;
newWidth: string;
animating: boolean;
destroyed: boolean;
}, {
cancelOptions(): ModalCancellableOption[];
showX(): boolean;
customStyle(): {
maxWidth: string;
} | null;
}, {
handleScroll(): void;
cancel(method: ModalCancellableOption): void;
close(): void;
keyPress({ key }: KeyboardEvent): void;
afterEnter(): void;
beforeLeave(): void;
afterLeave(): void;
}, ComponentOptionsMixin, ComponentOptionsMixin, {
'after-enter': () => true;
'after-leave': () => true;
cancel: (method: ModalCancellableOption) => true;
close: () => true;
'update:modelValue': (active: boolean) => true;
}, string, PublicProps, Readonly<ExtractPropTypes<    {
modelValue: BooleanConstructor;
component: (StringConstructor | ObjectConstructor | FunctionConstructor)[];
content: {
type: PropType<string | VNode | (string | VNode)[]>;
};
programmatic: BooleanConstructor;
props: ObjectConstructor;
events: {
type: ObjectConstructor;
default(): {};
};
width: {
type: (NumberConstructor | StringConstructor)[];
default: number;
};
hasModalCard: BooleanConstructor;
animation: {
type: StringConstructor;
default: string;
};
canCancel: {
type: PropType<boolean | ModalCancellableOption[]>;
default: () => ModalCancellableOption[];
};
cancelCallback: {
type: PropType<(method: ModalCancellableOption) => void>;
default: () => void;
};
scroll: {
type: PropType<"clip" | "keep">;
default: () => ModalScrollOption;
validator: (value: unknown) => value is "clip" | "keep";
};
fullScreen: BooleanConstructor;
trapFocus: {
type: BooleanConstructor;
default: () => boolean;
};
autoFocus: {
type: BooleanConstructor;
default: () => boolean;
};
customClass: StringConstructor;
customContentClass: (ArrayConstructor | StringConstructor | ObjectConstructor)[];
ariaRole: {
type: PropType<"dialog" | "alertdialog">;
validator: (value: unknown) => value is "dialog" | "alertdialog";
};
ariaModal: BooleanConstructor;
ariaLabel: {
type: StringConstructor;
validator: (value: unknown) => boolean;
};
closeButtonAriaLabel: {
type: StringConstructor;
default: string;
};
destroyOnHide: {
type: BooleanConstructor;
default: boolean;
};
renderOnMounted: {
type: BooleanConstructor;
default: boolean;
};
}>> & {
onCancel?: ((method: ModalCancellableOption) => any) | undefined;
onClose?: (() => any) | undefined;
"onAfter-enter"?: (() => any) | undefined;
"onAfter-leave"?: (() => any) | undefined;
"onUpdate:modelValue"?: ((active: boolean) => any) | undefined;
}, {
scroll: "clip" | "keep";
trapFocus: boolean;
modelValue: boolean;
programmatic: boolean;
events: Record<string, any>;
width: string | number;
hasModalCard: boolean;
animation: string;
canCancel: boolean | ModalCancellableOption[];
cancelCallback: (method: ModalCancellableOption) => void;
fullScreen: boolean;
autoFocus: boolean;
ariaModal: boolean;
closeButtonAriaLabel: string;
destroyOnHide: boolean;
renderOnMounted: boolean;
}, {}>, {
confirm: (value: string, dialog: any) => true;
}, string, PublicProps, Readonly<ExtractPropTypes<    {
customClass: {
type: StringConstructor;
default: string;
};
customContentClass: {
type: StringConstructor;
default: string;
};
title: StringConstructor;
message: (ArrayConstructor | StringConstructor)[];
icon: StringConstructor;
iconPack: StringConstructor;
hasIcon: BooleanConstructor;
type: {
type: StringConstructor;
default: string;
};
size: StringConstructor;
confirmText: {
type: StringConstructor;
default: () => string;
};
cancelText: {
type: StringConstructor;
default: () => string;
};
hasInput: BooleanConstructor;
inputAttrs: {
type: ObjectConstructor;
default: () => {};
};
confirmCallback: {
type: PropType<(value: string, dialog: any) => void>;
default: () => void;
};
closeOnConfirm: {
type: BooleanConstructor;
default: boolean;
};
container: {
type: StringConstructor;
default: () => string | null | undefined;
};
focusOn: {
type: StringConstructor;
default: string;
};
}>> & {
onConfirm?: ((value: string, dialog: any) => any) | undefined;
}, {
type: string;
customClass: string;
customContentClass: string;
hasIcon: boolean;
confirmText: string;
cancelText: string;
hasInput: boolean;
inputAttrs: Record<string, any>;
confirmCallback: (value: string, dialog: any) => void;
closeOnConfirm: boolean;
container: string;
focusOn: string;
}, {}>;

export declare const BDropdown: DefineComponent<    {
modelValue: {
type: PropType<ItemValueType | ItemValueType[]>;
default: null;
};
disabled: BooleanConstructor;
inline: BooleanConstructor;
scrollable: BooleanConstructor;
maxHeight: {
type: (NumberConstructor | StringConstructor)[];
default: number;
};
position: {
type: StringConstructor;
validator(value: unknown): boolean;
};
triggers: {
type: {
(arrayLength: number): ("click" | "contextmenu" | "focus" | "hover")[];
(...items: ("click" | "contextmenu" | "focus" | "hover")[]): ("click" | "contextmenu" | "focus" | "hover")[];
new (arrayLength: number): ("click" | "contextmenu" | "focus" | "hover")[];
new (...items: ("click" | "contextmenu" | "focus" | "hover")[]): ("click" | "contextmenu" | "focus" | "hover")[];
isArray(arg: any): arg is any[];
readonly prototype: any[];
from<T>(arrayLike: ArrayLike<T>): T[];
from<T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
from<T>(iterable: Iterable<T> | ArrayLike<T>): T[];
from<T, U>(iterable: Iterable<T> | ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
of<T>(...items: T[]): T[];
readonly [Symbol.species]: ArrayConstructor;
};
default: () => string[];
};
mobileModal: {
type: BooleanConstructor;
default: () => boolean;
};
ariaRole: {
type: StringConstructor;
validator(value: unknown): boolean;
default: null;
};
animation: {
type: StringConstructor;
default: string;
};
multiple: BooleanConstructor;
trapFocus: {
type: BooleanConstructor;
default: () => boolean;
};
closeOnClick: {
type: BooleanConstructor;
default: boolean;
};
canClose: {
type: (ArrayConstructor | BooleanConstructor)[];
default: boolean;
};
expanded: BooleanConstructor;
appendToBody: BooleanConstructor;
appendToBodyCopyParent: BooleanConstructor;
triggerTabindex: {
type: NumberConstructor;
default: number;
};
}, unknown, {
selected: any;
style: {};
isActive: boolean;
isHoverable: boolean;
maybeTap: boolean;
isTouchEnabled: boolean;
_bodyEl: Element | undefined;
timeOutID: ReturnType<typeof setTimeout> | undefined;
timeOutID2: ReturnType<typeof setTimeout> | undefined;
}, {
rootClasses(): (string | Record<string, boolean | undefined> | undefined)[];
isMobileModal(): boolean;
cancelOptions(): unknown[];
contentStyle(): {
maxHeight: string | undefined;
overflow: string | undefined;
};
hoverable(): boolean;
}, {
handleScroll(): void;
selectItem(value: ItemValueType): void;
isInWhiteList(el: EventTarget | null): boolean;
clickedOutside(event: Event): void;
keyPress({ key }: {
key?: KeyboardEvent["key"];
}): void;
onClick(): void;
onContextMenu(): void;
onHover(): void;
onTouchStart(): void;
onTouchMove(): void;
onTouchEnd(e: TouchEvent): void;
onFocus(): void;
toggle(): void;
updateAppendToBody(): void;
}, ComponentOptionsMixin, ComponentOptionsMixin, {
'active-change': (_isActive: boolean) => true;
change: (_selected: ItemValueType | ItemValueType[]) => true;
'update:modelValue': (_value: ItemValueType | ItemValueType[]) => true;
}, string, PublicProps, Readonly<ExtractPropTypes<    {
modelValue: {
type: PropType<ItemValueType | ItemValueType[]>;
default: null;
};
disabled: BooleanConstructor;
inline: BooleanConstructor;
scrollable: BooleanConstructor;
maxHeight: {
type: (NumberConstructor | StringConstructor)[];
default: number;
};
position: {
type: StringConstructor;
validator(value: unknown): boolean;
};
triggers: {
type: {
(arrayLength: number): ("click" | "contextmenu" | "focus" | "hover")[];
(...items: ("click" | "contextmenu" | "focus" | "hover")[]): ("click" | "contextmenu" | "focus" | "hover")[];
new (arrayLength: number): ("click" | "contextmenu" | "focus" | "hover")[];
new (...items: ("click" | "contextmenu" | "focus" | "hover")[]): ("click" | "contextmenu" | "focus" | "hover")[];
isArray(arg: any): arg is any[];
readonly prototype: any[];
from<T>(arrayLike: ArrayLike<T>): T[];
from<T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
from<T>(iterable: Iterable<T> | ArrayLike<T>): T[];
from<T, U>(iterable: Iterable<T> | ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
of<T>(...items: T[]): T[];
readonly [Symbol.species]: ArrayConstructor;
};
default: () => string[];
};
mobileModal: {
type: BooleanConstructor;
default: () => boolean;
};
ariaRole: {
type: StringConstructor;
validator(value: unknown): boolean;
default: null;
};
animation: {
type: StringConstructor;
default: string;
};
multiple: BooleanConstructor;
trapFocus: {
type: BooleanConstructor;
default: () => boolean;
};
closeOnClick: {
type: BooleanConstructor;
default: boolean;
};
canClose: {
type: (ArrayConstructor | BooleanConstructor)[];
default: boolean;
};
expanded: BooleanConstructor;
appendToBody: BooleanConstructor;
appendToBodyCopyParent: BooleanConstructor;
triggerTabindex: {
type: NumberConstructor;
default: number;
};
}>> & {
onChange?: ((_selected: any) => any) | undefined;
"onUpdate:modelValue"?: ((_value: any) => any) | undefined;
"onActive-change"?: ((_isActive: boolean) => any) | undefined;
}, {
trapFocus: boolean;
modelValue: any;
animation: string;
ariaRole: string;
expanded: boolean;
disabled: boolean;
appendToBody: boolean;
maxHeight: string | number;
inline: boolean;
scrollable: boolean;
triggers: ("click" | "contextmenu" | "focus" | "hover")[];
mobileModal: boolean;
multiple: boolean;
closeOnClick: boolean;
canClose: boolean | unknown[];
appendToBodyCopyParent: boolean;
triggerTabindex: number;
}, {}>;

export declare const BDropdownItem: DefineComponent<    {
value: {
type: PropType<ItemValueType>;
default: null;
};
separator: BooleanConstructor;
disabled: BooleanConstructor;
custom: BooleanConstructor;
focusable: {
type: BooleanConstructor;
default: boolean;
};
paddingless: BooleanConstructor;
hasLink: BooleanConstructor;
ariaRole: {
type: StringConstructor;
default: string;
};
}, unknown, unknown, {
anchorClasses(): {
'is-disabled': boolean;
'is-paddingless': boolean;
'is-active': boolean;
};
itemClasses(): {
'dropdown-item': boolean;
'is-disabled': boolean;
'is-paddingless': boolean;
'is-active': boolean;
'has-link': boolean;
};
ariaRoleItem(): "menuitem" | "listitem" | undefined;
isClickable(): boolean;
isActive(): boolean;
isFocusable(): boolean;
}, {
selectItem(): void;
}, ComponentOptionsMixin, ComponentOptionsMixin, {
click: () => true;
}, string, PublicProps, Readonly<ExtractPropTypes<    {
value: {
type: PropType<ItemValueType>;
default: null;
};
separator: BooleanConstructor;
disabled: BooleanConstructor;
custom: BooleanConstructor;
focusable: {
type: BooleanConstructor;
default: boolean;
};
paddingless: BooleanConstructor;
hasLink: BooleanConstructor;
ariaRole: {
type: StringConstructor;
default: string;
};
}>> & {
onClick?: (() => any) | undefined;
}, {
value: any;
ariaRole: string;
disabled: boolean;
separator: boolean;
custom: boolean;
focusable: boolean;
paddingless: boolean;
hasLink: boolean;
}, {}>;

export declare const BField: DefineComponent<    {
type: {
type: PropType<FieldTypeProp>;
default: undefined;
};
label: StringConstructor;
labelFor: StringConstructor;
message: {
type: PropType<FieldMessageProp>;
default: undefined;
};
grouped: BooleanConstructor;
groupMultiline: BooleanConstructor;
position: StringConstructor;
expanded: BooleanConstructor;
horizontal: BooleanConstructor;
addons: {
type: BooleanConstructor;
default: boolean;
};
customClass: StringConstructor;
labelPosition: {
type: StringConstructor;
default: () => FieldLabelPosition | null | undefined;
};
}, unknown, {
newType: FieldTypeProp | null;
newMessage: FieldMessageProp | null;
fieldLabelSize: string | null;
numberInputClasses: string[];
_isField: boolean;
}, {
rootClasses(): (string[] | {
'is-expanded': boolean;
'is-horizontal': boolean;
'is-floating-in-label': boolean | "" | undefined;
'is-floating-label': boolean | "" | undefined;
})[];
innerFieldClasses(): (string | {
'is-grouped-multiline': boolean;
} | undefined)[];
hasInnerField(): boolean;
newPosition(): string | undefined;
formattedMessage(): string[] | "";
hasLabel(): string | Slot<any> | undefined;
hasMessage(): Slot<any> | FieldMessagePropItem | FieldMessagePropItem[] | undefined;
}, {
fieldType(): "is-grouped" | "has-addons" | undefined;
hasAddons(): boolean;
wrapNumberinput({ controlsPosition, size }: {
controlsPosition?: string;
size?: string;
}): void;
}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {
type: {
type: PropType<FieldTypeProp>;
default: undefined;
};
label: StringConstructor;
labelFor: StringConstructor;
message: {
type: PropType<FieldMessageProp>;
default: undefined;
};
grouped: BooleanConstructor;
groupMultiline: BooleanConstructor;
position: StringConstructor;
expanded: BooleanConstructor;
horizontal: BooleanConstructor;
addons: {
type: BooleanConstructor;
default: boolean;
};
customClass: StringConstructor;
labelPosition: {
type: StringConstructor;
default: () => FieldLabelPosition | null | undefined;
};
}>>, {
type: FieldTypeProp;
expanded: boolean;
message: FieldMessageProp;
grouped: boolean;
groupMultiline: boolean;
horizontal: boolean;
addons: boolean;
labelPosition: string;
}, {}>;

export declare const BIcon: DefineComponent<    {
type: (StringConstructor | ObjectConstructor)[];
component: StringConstructor;
pack: StringConstructor;
icon: {
type: StringConstructor;
required: true;
};
size: StringConstructor;
customSize: StringConstructor;
customClass: StringConstructor;
both: BooleanConstructor;
}, unknown, unknown, {
iconConfig(): IconPack;
iconPrefix(): string;
newIcon(): string;
newPack(): string;
newType(): string | undefined;
newCustomSize(): string | null;
customSizeByPack(): string | null;
useIconComponent(): string | null | undefined;
}, {
getEquivalentIconOf(value: string): string;
}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {
type: (StringConstructor | ObjectConstructor)[];
component: StringConstructor;
pack: StringConstructor;
icon: {
type: StringConstructor;
required: true;
};
size: StringConstructor;
customSize: StringConstructor;
customClass: StringConstructor;
both: BooleanConstructor;
}>>, {
both: boolean;
}, {}>;

export declare const BImage: DefineComponent<    {
src: StringConstructor;
alt: StringConstructor;
srcFallback: StringConstructor;
webpFallback: {
type: StringConstructor;
default: () => string | null | undefined;
};
lazy: {
type: BooleanConstructor;
default: () => boolean;
};
responsive: {
type: BooleanConstructor;
default: () => boolean;
};
ratio: {
type: StringConstructor;
default: () => number | null | undefined;
};
placeholder: StringConstructor;
srcset: StringConstructor;
srcsetSizes: PropType<number[]>;
srcsetFormatter: {
type: PropType<SrcsetFormatter>;
default: SrcsetFormatter;
};
rounded: {
type: BooleanConstructor;
default: boolean;
};
captionFirst: {
type: BooleanConstructor;
default: boolean;
};
customClass: StringConstructor;
}, unknown, {
clientWidth: number;
webpSupportVerified: boolean;
webpSupported: boolean;
useNativeLazy: boolean;
observer: (IntersectionObserver | null);
inViewPort: boolean;
loaded: boolean;
failed: boolean;
}, {
ratioPattern(): RegExp;
hasRatio(): boolean;
figureClasses(): Record<string, boolean>;
figureStyles(): {
paddingTop: string;
} | undefined;
imgClasses(): Record<string, boolean>;
srcExt(): string | undefined;
isWepb(): boolean;
computedSrc(): string | undefined;
computedWidth(): number | undefined;
computedNativeLazy(): "lazy" | undefined;
isDisplayed(): boolean;
placeholderExt(): string | undefined;
isPlaceholderWepb(): boolean;
computedPlaceholder(): string | undefined;
isPlaceholderDisplayed(): boolean | "" | Slot<any> | undefined;
computedSrcset(): string | undefined;
computedSizes(): string | undefined;
isCaptionFirst(): boolean | undefined;
isCaptionLast(): boolean | undefined;
}, {
getExt(filename?: string, clean?: boolean): string | undefined;
setWidth(): void;
formatSrcset(src: string, size: number): string;
onLoad(event: Event): void;
onError(event: Event): void;
emitSrc(event: Event, emit: (src?: string) => void): void;
}, ComponentOptionsMixin, ComponentOptionsMixin, {
load: (event: Event, src?: string) => true;
error: (event: Event, src?: string) => true;
}, string, PublicProps, Readonly<ExtractPropTypes<    {
src: StringConstructor;
alt: StringConstructor;
srcFallback: StringConstructor;
webpFallback: {
type: StringConstructor;
default: () => string | null | undefined;
};
lazy: {
type: BooleanConstructor;
default: () => boolean;
};
responsive: {
type: BooleanConstructor;
default: () => boolean;
};
ratio: {
type: StringConstructor;
default: () => number | null | undefined;
};
placeholder: StringConstructor;
srcset: StringConstructor;
srcsetSizes: PropType<number[]>;
srcsetFormatter: {
type: PropType<SrcsetFormatter>;
default: SrcsetFormatter;
};
rounded: {
type: BooleanConstructor;
default: boolean;
};
captionFirst: {
type: BooleanConstructor;
default: boolean;
};
customClass: StringConstructor;
}>> & {
onLoad?: ((event: Event, src?: string | undefined) => any) | undefined;
onError?: ((event: Event, src?: string | undefined) => any) | undefined;
}, {
rounded: boolean;
lazy: boolean;
webpFallback: string;
responsive: boolean;
ratio: string;
srcsetFormatter: SrcsetFormatter;
captionFirst: boolean;
}, {}>;

export declare const BInput: DefineComponent<    {
modelValue: {
type: PropType<string | number | undefined | null>;
};
type: {
type: StringConstructor;
default: string;
};
lazy: {
type: BooleanConstructor;
default: boolean;
};
passwordReveal: BooleanConstructor;
iconClickable: BooleanConstructor;
hasCounter: {
type: BooleanConstructor;
default: () => boolean;
};
customClass: {
type: StringConstructor;
default: string;
};
iconRight: StringConstructor;
iconRightClickable: BooleanConstructor;
iconRightType: StringConstructor;
autocomplete: StringConstructor;
}, unknown, {
newValue: string | number | null | undefined;
newType: string;
newAutocomplete: string;
isPasswordVisible: boolean;
_elementRef: string;
}, {
computedValue: {
get(): string | number | null | undefined;
set(value: string | number | undefined): void;
};
rootClasses(): (string | {
'is-expanded': boolean;
'is-loading': boolean;
'is-clearfix': boolean;
} | undefined)[];
inputClasses(): (string | {
'is-rounded': boolean;
} | undefined)[];
hasIconRight(): string | true | undefined;
rightIcon(): string | undefined;
rightIconType(): string | undefined;
iconPosition(): string;
statusTypeIcon(): "information" | "alert" | "alert-circle" | "check" | undefined;
hasMessage(): boolean;
passwordVisibleIcon(): "eye" | "eye-off";
valueLength(): number;
}, {
togglePasswordVisibility(): void;
iconClick(emit: "icon-click" | "icon-right-click", event: MouseEvent): void;
rightIconClick(event: MouseEvent): void;
onInput(): void;
onChange(): void;
revalidate(): void;
}, DefineComponent<    {
compatFallthrough: {
type: BooleanConstructor;
default: () => boolean;
};
}, unknown, unknown, {
rootAttrs(): {
class: unknown;
style: StyleValue;
id: string | undefined;
} | {
class?: undefined;
style?: undefined;
id?: undefined;
};
fallthroughAttrs(): {
[x: string]: unknown;
};
}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {
compatFallthrough: {
type: BooleanConstructor;
default: () => boolean;
};
}>>, {
compatFallthrough: boolean;
}, {}> | DefineComponent<    {
size: StringConstructor;
expanded: BooleanConstructor;
loading: BooleanConstructor;
rounded: BooleanConstructor;
icon: StringConstructor;
iconPack: StringConstructor;
maxlength: (NumberConstructor | StringConstructor)[];
useHtml5Validation: {
type: BooleanConstructor;
default: () => boolean;
};
validationMessage: StringConstructor;
locale: {
type: (StringConstructor | {
(arrayLength: number): string[];
(...items: string[]): string[];
new (arrayLength: number): string[];
new (...items: string[]): string[];
isArray(arg: any): arg is any[];
readonly prototype: any[];
from<T>(arrayLike: ArrayLike<T>): T[];
from<T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
from<T>(iterable: Iterable<T> | ArrayLike<T>): T[];
from<T, U>(iterable: Iterable<T> | ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
of<T>(...items: T[]): T[];
readonly [Symbol.species]: ArrayConstructor;
})[];
default: () => string | string[] | null | undefined;
};
statusIcon: {
type: BooleanConstructor;
default: () => boolean;
};
}, unknown, {
isValid: boolean;
isFocused: boolean;
newIconPack: string;
_elementRef: string;
}, {
parentField(): CreateComponentPublicInstance<Readonly<ExtractPropTypes<    {
type: {
type: PropType<FieldTypeProp>;
default: undefined;
};
label: StringConstructor;
labelFor: StringConstructor;
message: {
type: PropType<FieldMessageProp>;
default: undefined;
};
grouped: BooleanConstructor;
groupMultiline: BooleanConstructor;
position: StringConstructor;
expanded: BooleanConstructor;
horizontal: BooleanConstructor;
addons: {
type: BooleanConstructor;
default: boolean;
};
customClass: StringConstructor;
labelPosition: {
type: StringConstructor;
default: () => FieldLabelPosition | null | undefined;
};
}>>, unknown, {
newType: FieldTypeProp | null;
newMessage: FieldMessageProp | null;
fieldLabelSize: string | null;
numberInputClasses: string[];
_isField: boolean;
}, {
rootClasses(): (string[] | {
'is-expanded': boolean;
'is-horizontal': boolean;
'is-floating-in-label': boolean | "" | undefined;
'is-floating-label': boolean | "" | undefined;
})[];
innerFieldClasses(): (string | {
'is-grouped-multiline': boolean;
} | undefined)[];
hasInnerField(): boolean;
newPosition(): string | undefined;
formattedMessage(): string[] | "";
hasLabel(): string | Slot<any> | undefined;
hasMessage(): Slot<any> | FieldMessagePropItem | FieldMessagePropItem[] | undefined;
}, {
fieldType(): "is-grouped" | "has-addons" | undefined;
hasAddons(): boolean;
wrapNumberinput({ controlsPosition, size }: {
controlsPosition?: string;
size?: string;
}): void;
}, ComponentOptionsMixin, ComponentOptionsMixin, {}, VNodeProps & AllowedComponentProps & ComponentCustomProps & Readonly<ExtractPropTypes<    {
type: {
type: PropType<FieldTypeProp>;
default: undefined;
};
label: StringConstructor;
labelFor: StringConstructor;
message: {
type: PropType<FieldMessageProp>;
default: undefined;
};
grouped: BooleanConstructor;
groupMultiline: BooleanConstructor;
position: StringConstructor;
expanded: BooleanConstructor;
horizontal: BooleanConstructor;
addons: {
type: BooleanConstructor;
default: boolean;
};
customClass: StringConstructor;
labelPosition: {
type: StringConstructor;
default: () => FieldLabelPosition | null | undefined;
};
}>>, {
type: FieldTypeProp;
expanded: boolean;
message: FieldMessageProp;
grouped: boolean;
groupMultiline: boolean;
horizontal: boolean;
addons: boolean;
labelPosition: string;
}, true, {}, {}, {
P: {};
B: {};
D: {};
C: {};
M: {};
Defaults: {};
}, Readonly<ExtractPropTypes<    {
type: {
type: PropType<FieldTypeProp>;
default: undefined;
};
label: StringConstructor;
labelFor: StringConstructor;
message: {
type: PropType<FieldMessageProp>;
default: undefined;
};
grouped: BooleanConstructor;
groupMultiline: BooleanConstructor;
position: StringConstructor;
expanded: BooleanConstructor;
horizontal: BooleanConstructor;
addons: {
type: BooleanConstructor;
default: boolean;
};
customClass: StringConstructor;
labelPosition: {
type: StringConstructor;
default: () => FieldLabelPosition | null | undefined;
};
}>>, {}, {
newType: FieldTypeProp | null;
newMessage: FieldMessageProp | null;
fieldLabelSize: string | null;
numberInputClasses: string[];
_isField: boolean;
}, {
rootClasses(): (string[] | {
'is-expanded': boolean;
'is-horizontal': boolean;
'is-floating-in-label': boolean | "" | undefined;
'is-floating-label': boolean | "" | undefined;
})[];
innerFieldClasses(): (string | {
'is-grouped-multiline': boolean;
} | undefined)[];
hasInnerField(): boolean;
newPosition(): string | undefined;
formattedMessage(): string[] | "";
hasLabel(): string | Slot<any> | undefined;
hasMessage(): Slot<any> | FieldMessagePropItem | FieldMessagePropItem[] | undefined;
}, {
fieldType(): "is-grouped" | "has-addons" | undefined;
hasAddons(): boolean;
wrapNumberinput({ controlsPosition, size }: {
controlsPosition?: string;
size?: string;
}): void;
}, {
type: FieldTypeProp;
expanded: boolean;
message: FieldMessageProp;
grouped: boolean;
groupMultiline: boolean;
horizontal: boolean;
addons: boolean;
labelPosition: string;
}> | undefined;
statusType(): string | undefined;
statusMessage(): Slot<any> | FieldMessagePropItem | FieldMessagePropItem[] | undefined;
iconSize(): "" | "is-medium" | "is-small" | undefined;
}, {
focus(): void;
onBlur($event?: Event): void;
onFocus($event?: Event): void;
getElement(): HTMLInputElement | HTMLButtonElement | HTMLFieldSetElement | HTMLOutputElement | HTMLSelectElement | HTMLTextAreaElement;
setInvalid(): void;
setValidity(type: FieldTypeProp | null, message: FieldMessageProp | null): void;
checkHtml5Validity(): boolean;
}, ComponentOptionsMixin, ComponentOptionsMixin, {
blur: (event?: Event) => true;
focus: (event?: Event) => true;
}, string, PublicProps, Readonly<ExtractPropTypes<    {
size: StringConstructor;
expanded: BooleanConstructor;
loading: BooleanConstructor;
rounded: BooleanConstructor;
icon: StringConstructor;
iconPack: StringConstructor;
maxlength: (NumberConstructor | StringConstructor)[];
useHtml5Validation: {
type: BooleanConstructor;
default: () => boolean;
};
validationMessage: StringConstructor;
locale: {
type: (StringConstructor | {
(arrayLength: number): string[];
(...items: string[]): string[];
new (arrayLength: number): string[];
new (...items: string[]): string[];
isArray(arg: any): arg is any[];
readonly prototype: any[];
from<T>(arrayLike: ArrayLike<T>): T[];
from<T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
from<T>(iterable: Iterable<T> | ArrayLike<T>): T[];
from<T, U>(iterable: Iterable<T> | ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
of<T>(...items: T[]): T[];
readonly [Symbol.species]: ArrayConstructor;
})[];
default: () => string | string[] | null | undefined;
};
statusIcon: {
type: BooleanConstructor;
default: () => boolean;
};
}>> & {
onFocus?: ((event?: Event | undefined) => any) | undefined;
onBlur?: ((event?: Event | undefined) => any) | undefined;
}, {
rounded: boolean;
loading: boolean;
expanded: boolean;
locale: string | string[];
useHtml5Validation: boolean;
statusIcon: boolean;
}, {}>, ComponentOptionsMixin, {
'icon-click': (event: MouseEvent) => true;
'icon-right-click': (event: MouseEvent) => true;
'update:modelValue': (value: string | number | undefined) => true;
}, string, PublicProps, Readonly<ExtractPropTypes<    {
modelValue: {
type: PropType<string | number | undefined | null>;
};
type: {
type: StringConstructor;
default: string;
};
lazy: {
type: BooleanConstructor;
default: boolean;
};
passwordReveal: BooleanConstructor;
iconClickable: BooleanConstructor;
hasCounter: {
type: BooleanConstructor;
default: () => boolean;
};
customClass: {
type: StringConstructor;
default: string;
};
iconRight: StringConstructor;
iconRightClickable: BooleanConstructor;
iconRightType: StringConstructor;
autocomplete: StringConstructor;
}>> & {
"onUpdate:modelValue"?: ((value: string | number | undefined) => any) | undefined;
"onIcon-click"?: ((event: MouseEvent) => any) | undefined;
"onIcon-right-click"?: ((event: MouseEvent) => any) | undefined;
}, {
type: string;
customClass: string;
lazy: boolean;
passwordReveal: boolean;
iconClickable: boolean;
hasCounter: boolean;
iconRightClickable: boolean;
}, {}>;

export declare const BLoading: DefineComponent<    {
modelValue: BooleanConstructor;
programmatic: BooleanConstructor;
container: PropType<HTMLElement>;
isFullPage: {
type: BooleanConstructor;
default: boolean;
};
animation: {
type: StringConstructor;
default: string;
};
canCancel: {
type: BooleanConstructor;
default: boolean;
};
onCancel: {
type: PropType<(...args: any[]) => void>;
default: () => void;
};
}, unknown, {
isActive: boolean;
displayInFullPage: boolean;
}, {}, {
cancel(): void;
close(...args: any[]): void;
keyPress({ key }: KeyboardEvent): void;
}, ComponentOptionsMixin, ComponentOptionsMixin, {
close: () => true;
'update:is-full-page': (_flag: boolean) => true;
'update:modelValue': (_flag: boolean) => true;
}, string, PublicProps, Readonly<ExtractPropTypes<    {
modelValue: BooleanConstructor;
programmatic: BooleanConstructor;
container: PropType<HTMLElement>;
isFullPage: {
type: BooleanConstructor;
default: boolean;
};
animation: {
type: StringConstructor;
default: string;
};
canCancel: {
type: BooleanConstructor;
default: boolean;
};
onCancel: {
type: PropType<(...args: any[]) => void>;
default: () => void;
};
}>> & {
onClose?: (() => any) | undefined;
"onUpdate:modelValue"?: ((_flag: boolean) => any) | undefined;
"onUpdate:is-full-page"?: ((_flag: boolean) => any) | undefined;
}, {
onCancel: (...args: any[]) => void;
modelValue: boolean;
programmatic: boolean;
animation: string;
canCancel: boolean;
isFullPage: boolean;
}, {}>;

export declare const BMenu: DefineComponent<    {
accordion: {
type: BooleanConstructor;
default: boolean;
};
activable: {
type: BooleanConstructor;
default: boolean;
};
}, unknown, {
_isMenu: boolean;
}, {}, {}, DefineComponent<    {}, {}, {
menuItems: IMenuItem[];
}, {}, {
appendMenuItem(item: IMenuItem): void;
removeMenuItem(item: IMenuItem): void;
}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {}>>, {}, {}>, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {
accordion: {
type: BooleanConstructor;
default: boolean;
};
activable: {
type: BooleanConstructor;
default: boolean;
};
}>>, {
accordion: boolean;
activable: boolean;
}, {}>;

export declare const BMenuItem: DefineComponent<    {
label: StringConstructor;
modelValue: BooleanConstructor;
expanded: BooleanConstructor;
disabled: BooleanConstructor;
iconPack: StringConstructor;
icon: StringConstructor;
animation: {
type: StringConstructor;
default: string;
};
tag: {
type: (StringConstructor | ObjectConstructor)[];
default: string;
validator: (value: unknown) => boolean;
};
ariaRole: {
type: StringConstructor;
default: string;
};
size: {
type: StringConstructor;
default: string;
};
}, unknown, {
newActive: boolean;
newExpanded: boolean;
}, {
ariaRoleMenu(): "menuitem" | undefined;
}, {
onClick(): void;
reset(parent: MenuItemContainer | null, menu: MenuInstance | null): void;
getMenu(): MenuInstance | null;
}, DefineComponent<    {
compatFallthrough: {
type: BooleanConstructor;
default: () => boolean;
};
}, unknown, unknown, {
rootAttrs(): {
class: unknown;
style: StyleValue;
id: string | undefined;
} | {
class?: undefined;
style?: undefined;
id?: undefined;
};
fallthroughAttrs(): {
[x: string]: unknown;
};
}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {
compatFallthrough: {
type: BooleanConstructor;
default: () => boolean;
};
}>>, {
compatFallthrough: boolean;
}, {}> | DefineComponent<    {}, {}, {
menuItems: IMenuItem[];
}, {}, {
appendMenuItem(item: IMenuItem): void;
removeMenuItem(item: IMenuItem): void;
}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {}>>, {}, {}>, ComponentOptionsMixin, {
'update:modelValue': (_isActive: boolean) => true;
'update:expanded': (_isExpanded: boolean) => true;
}, string, PublicProps, Readonly<ExtractPropTypes<    {
label: StringConstructor;
modelValue: BooleanConstructor;
expanded: BooleanConstructor;
disabled: BooleanConstructor;
iconPack: StringConstructor;
icon: StringConstructor;
animation: {
type: StringConstructor;
default: string;
};
tag: {
type: (StringConstructor | ObjectConstructor)[];
default: string;
validator: (value: unknown) => boolean;
};
ariaRole: {
type: StringConstructor;
default: string;
};
size: {
type: StringConstructor;
default: string;
};
}>> & {
"onUpdate:modelValue"?: ((_isActive: boolean) => any) | undefined;
"onUpdate:expanded"?: ((_isExpanded: boolean) => any) | undefined;
}, {
size: string;
modelValue: boolean;
animation: string;
ariaRole: string;
expanded: boolean;
tag: string | Record<string, any>;
disabled: boolean;
}, {}>;

export declare const BMenuList: DefineComponent<    {
label: StringConstructor;
icon: StringConstructor;
iconPack: StringConstructor;
ariaRole: {
type: StringConstructor;
default: string;
};
size: {
type: StringConstructor;
default: string;
};
}, unknown, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {
label: StringConstructor;
icon: StringConstructor;
iconPack: StringConstructor;
ariaRole: {
type: StringConstructor;
default: string;
};
size: {
type: StringConstructor;
default: string;
};
}>>, {
size: string;
ariaRole: string;
}, {}>;

export declare const BMessage: DefineComponent<    {
ariaCloseLabel: StringConstructor;
}, unknown, unknown, {}, {}, DefineComponent<    {
modelValue: {
type: BooleanConstructor;
default: boolean;
};
title: StringConstructor;
closable: {
type: BooleanConstructor;
default: boolean;
};
message: StringConstructor;
type: StringConstructor;
hasIcon: BooleanConstructor;
size: StringConstructor;
icon: StringConstructor;
iconPack: StringConstructor;
iconSize: StringConstructor;
autoClose: {
type: BooleanConstructor;
default: boolean;
};
duration: {
type: NumberConstructor;
default: number;
};
progressBar: {
type: BooleanConstructor;
default: boolean;
};
}, unknown, {
isActive: boolean;
remainingTime: number;
newIconSize: string;
timer: ReturnType<typeof setTimeout> | undefined;
}, {
computedIcon(): string | null;
}, {
close(): void;
click(): void;
setAutoClose(): void;
setDurationProgress(): void;
resetDurationProgress(): void;
}, ComponentOptionsMixin, ComponentOptionsMixin, {
click: () => true;
close: () => true;
'update:modelValue': (value: boolean) => true;
}, string, PublicProps, Readonly<ExtractPropTypes<    {
modelValue: {
type: BooleanConstructor;
default: boolean;
};
title: StringConstructor;
closable: {
type: BooleanConstructor;
default: boolean;
};
message: StringConstructor;
type: StringConstructor;
hasIcon: BooleanConstructor;
size: StringConstructor;
icon: StringConstructor;
iconPack: StringConstructor;
iconSize: StringConstructor;
autoClose: {
type: BooleanConstructor;
default: boolean;
};
duration: {
type: NumberConstructor;
default: number;
};
progressBar: {
type: BooleanConstructor;
default: boolean;
};
}>> & {
onClick?: (() => any) | undefined;
onClose?: (() => any) | undefined;
"onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
}, {
modelValue: boolean;
duration: number;
hasIcon: boolean;
closable: boolean;
autoClose: boolean;
progressBar: boolean;
}, {}>, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {
ariaCloseLabel: StringConstructor;
}>>, {}, {}>;

export declare const BModal: DefineComponent<    {
modelValue: BooleanConstructor;
component: (StringConstructor | ObjectConstructor | FunctionConstructor)[];
content: {
type: PropType<string | VNode | (string | VNode)[]>;
};
programmatic: BooleanConstructor;
props: ObjectConstructor;
events: {
type: ObjectConstructor;
default(): {};
};
width: {
type: (NumberConstructor | StringConstructor)[];
default: number;
};
hasModalCard: BooleanConstructor;
animation: {
type: StringConstructor;
default: string;
};
canCancel: {
type: PropType<boolean | ModalCancellableOption[]>;
default: () => ModalCancellableOption[];
};
cancelCallback: {
type: PropType<(method: ModalCancellableOption) => void>;
default: () => void;
};
scroll: {
type: PropType<ModalScroll>;
default: () => ModalScrollOption;
validator: (value: unknown) => value is ModalScroll;
};
fullScreen: BooleanConstructor;
trapFocus: {
type: BooleanConstructor;
default: () => boolean;
};
autoFocus: {
type: BooleanConstructor;
default: () => boolean;
};
customClass: StringConstructor;
customContentClass: (ArrayConstructor | StringConstructor | ObjectConstructor)[];
ariaRole: {
type: PropType<ModalAriaRole>;
validator: (value: unknown) => value is ModalAriaRole;
};
ariaModal: BooleanConstructor;
ariaLabel: {
type: StringConstructor;
validator: (value: unknown) => boolean;
};
closeButtonAriaLabel: {
type: StringConstructor;
default: string;
};
destroyOnHide: {
type: BooleanConstructor;
default: boolean;
};
renderOnMounted: {
type: BooleanConstructor;
default: boolean;
};
}, unknown, {
isActive: boolean;
savedScrollTop: number | null;
newWidth: string;
animating: boolean;
destroyed: boolean;
}, {
cancelOptions(): ModalCancellableOption[];
showX(): boolean;
customStyle(): {
maxWidth: string;
} | null;
}, {
handleScroll(): void;
cancel(method: ModalCancellableOption): void;
close(): void;
keyPress({ key }: KeyboardEvent): void;
afterEnter(): void;
beforeLeave(): void;
afterLeave(): void;
}, ComponentOptionsMixin, ComponentOptionsMixin, {
'after-enter': () => true;
'after-leave': () => true;
cancel: (method: ModalCancellableOption) => true;
close: () => true;
'update:modelValue': (active: boolean) => true;
}, string, PublicProps, Readonly<ExtractPropTypes<    {
modelValue: BooleanConstructor;
component: (StringConstructor | ObjectConstructor | FunctionConstructor)[];
content: {
type: PropType<string | VNode | (string | VNode)[]>;
};
programmatic: BooleanConstructor;
props: ObjectConstructor;
events: {
type: ObjectConstructor;
default(): {};
};
width: {
type: (NumberConstructor | StringConstructor)[];
default: number;
};
hasModalCard: BooleanConstructor;
animation: {
type: StringConstructor;
default: string;
};
canCancel: {
type: PropType<boolean | ModalCancellableOption[]>;
default: () => ModalCancellableOption[];
};
cancelCallback: {
type: PropType<(method: ModalCancellableOption) => void>;
default: () => void;
};
scroll: {
type: PropType<ModalScroll>;
default: () => ModalScrollOption;
validator: (value: unknown) => value is ModalScroll;
};
fullScreen: BooleanConstructor;
trapFocus: {
type: BooleanConstructor;
default: () => boolean;
};
autoFocus: {
type: BooleanConstructor;
default: () => boolean;
};
customClass: StringConstructor;
customContentClass: (ArrayConstructor | StringConstructor | ObjectConstructor)[];
ariaRole: {
type: PropType<ModalAriaRole>;
validator: (value: unknown) => value is ModalAriaRole;
};
ariaModal: BooleanConstructor;
ariaLabel: {
type: StringConstructor;
validator: (value: unknown) => boolean;
};
closeButtonAriaLabel: {
type: StringConstructor;
default: string;
};
destroyOnHide: {
type: BooleanConstructor;
default: boolean;
};
renderOnMounted: {
type: BooleanConstructor;
default: boolean;
};
}>> & {
onCancel?: ((method: ModalCancellableOption) => any) | undefined;
onClose?: (() => any) | undefined;
"onAfter-enter"?: (() => any) | undefined;
"onAfter-leave"?: (() => any) | undefined;
"onUpdate:modelValue"?: ((active: boolean) => any) | undefined;
}, {
scroll: "clip" | "keep";
trapFocus: boolean;
modelValue: boolean;
programmatic: boolean;
events: Record<string, any>;
width: string | number;
hasModalCard: boolean;
animation: string;
canCancel: boolean | ModalCancellableOption[];
cancelCallback: (method: ModalCancellableOption) => void;
fullScreen: boolean;
autoFocus: boolean;
ariaModal: boolean;
closeButtonAriaLabel: string;
destroyOnHide: boolean;
renderOnMounted: boolean;
}, {}>;

export declare const BNavbar: DefineComponent<    {
type: PropType<VueClassAttribute>;
transparent: {
type: BooleanConstructor;
default: boolean;
};
fixedTop: {
type: BooleanConstructor;
default: boolean;
};
fixedBottom: {
type: BooleanConstructor;
default: boolean;
};
modelValue: {
type: BooleanConstructor;
default: boolean;
};
centered: {
type: BooleanConstructor;
default: boolean;
};
wrapperClass: {
type: PropType<StyleValue>;
};
closeOnClick: {
type: BooleanConstructor;
default: boolean;
};
mobileBurger: {
type: BooleanConstructor;
default: boolean;
};
spaced: BooleanConstructor;
shadow: BooleanConstructor;
}, unknown, {
internalIsActive: boolean;
_isNavBar: boolean;
}, {
isOpened(): boolean;
computedClasses(): VueClassAttribute[];
}, {
toggleActive(): void;
closeMenu(): void;
emitUpdateParentEvent(): void;
setBodyClass(className: string): void;
removeBodyClass(className: string): void;
checkIfFixedPropertiesAreColliding(): void;
genNavbar(): VNode<RendererNode, RendererElement, {
[key: string]: any;
}>;
genNavbarSlots(slots: VNode[]): VNode<RendererNode, RendererElement, {
[key: string]: any;
}>;
genNavbarBrandNode(): VNode<RendererNode, RendererElement, {
[key: string]: any;
}>;
genBurgerNode(): VNode<RendererNode, RendererElement, {
[key: string]: any;
}> | VNode<RendererNode, RendererElement, {
[key: string]: any;
}>[] | undefined;
genNavbarSlotsNode(): VNode<RendererNode, RendererElement, {
[key: string]: any;
}>;
genMenuPosition(positionName: "start" | "end"): VNode<RendererNode, RendererElement, {
[key: string]: any;
}>;
setBodyFixedTopClass(isSet: boolean): void;
setBodyFixedBottomClass(isSet: boolean): void;
}, ComponentOptionsMixin, ComponentOptionsMixin, {
'update:modelValue': (_value: boolean) => true;
}, string, PublicProps, Readonly<ExtractPropTypes<    {
type: PropType<VueClassAttribute>;
transparent: {
type: BooleanConstructor;
default: boolean;
};
fixedTop: {
type: BooleanConstructor;
default: boolean;
};
fixedBottom: {
type: BooleanConstructor;
default: boolean;
};
modelValue: {
type: BooleanConstructor;
default: boolean;
};
centered: {
type: BooleanConstructor;
default: boolean;
};
wrapperClass: {
type: PropType<StyleValue>;
};
closeOnClick: {
type: BooleanConstructor;
default: boolean;
};
mobileBurger: {
type: BooleanConstructor;
default: boolean;
};
spaced: BooleanConstructor;
shadow: BooleanConstructor;
}>> & {
"onUpdate:modelValue"?: ((_value: boolean) => any) | undefined;
}, {
transparent: boolean;
modelValue: boolean;
closeOnClick: boolean;
fixedTop: boolean;
fixedBottom: boolean;
centered: boolean;
mobileBurger: boolean;
spaced: boolean;
shadow: boolean;
}, {}>;

export declare const BNavbarDropdown: DefineComponent<    {
label: StringConstructor;
hoverable: BooleanConstructor;
active: BooleanConstructor;
right: BooleanConstructor;
arrowless: BooleanConstructor;
boxed: BooleanConstructor;
closeOnClick: {
type: BooleanConstructor;
default: boolean;
};
collapsible: BooleanConstructor;
tag: {
type: (StringConstructor | ObjectConstructor)[];
default: string;
};
}, unknown, {
newActive: boolean;
isHoverable: boolean;
_isNavbarDropdown: boolean;
}, {}, {
toggleMenu(): void;
showMenu(): void;
closeMenu(): void;
checkHoverable(): void;
}, DefineComponent<    {
compatFallthrough: {
type: BooleanConstructor;
default: () => boolean;
};
}, unknown, unknown, {
rootAttrs(): {
class: unknown;
style: StyleValue;
id: string | undefined;
} | {
class?: undefined;
style?: undefined;
id?: undefined;
};
fallthroughAttrs(): {
[x: string]: unknown;
};
}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {
compatFallthrough: {
type: BooleanConstructor;
default: () => boolean;
};
}>>, {
compatFallthrough: boolean;
}, {}>, ComponentOptionsMixin, {
'active-change': (_active: boolean) => true;
}, string, PublicProps, Readonly<ExtractPropTypes<    {
label: StringConstructor;
hoverable: BooleanConstructor;
active: BooleanConstructor;
right: BooleanConstructor;
arrowless: BooleanConstructor;
boxed: BooleanConstructor;
closeOnClick: {
type: BooleanConstructor;
default: boolean;
};
collapsible: BooleanConstructor;
tag: {
type: (StringConstructor | ObjectConstructor)[];
default: string;
};
}>> & {
"onActive-change"?: ((_active: boolean) => any) | undefined;
}, {
active: boolean;
tag: string | Record<string, any>;
closeOnClick: boolean;
hoverable: boolean;
right: boolean;
arrowless: boolean;
boxed: boolean;
collapsible: boolean;
}, {}>;

export declare const BNavbarItem: DefineComponent<    {
tag: {
type: (StringConstructor | ObjectConstructor)[];
default: string;
};
active: BooleanConstructor;
}, unknown, unknown, {}, {
keyPress({ key }: {
key?: KeyboardEvent["key"];
}): void;
handleClickEvent(event: {
target: {
localName: string;
};
}): void;
closeMenuRecursive(current: ComponentPublicInstance, targetComponents: string[]): NavbarItemParent | null;
}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {
tag: {
type: (StringConstructor | ObjectConstructor)[];
default: string;
};
active: BooleanConstructor;
}>>, {
active: boolean;
tag: string | Record<string, any>;
}, {}>;

export declare const BNotification: DefineComponent<    {
position: StringConstructor;
ariaCloseLabel: StringConstructor;
animation: {
type: StringConstructor;
default: string;
};
}, unknown, unknown, {}, {}, DefineComponent<    {
modelValue: {
type: BooleanConstructor;
default: boolean;
};
title: StringConstructor;
closable: {
type: BooleanConstructor;
default: boolean;
};
message: StringConstructor;
type: StringConstructor;
hasIcon: BooleanConstructor;
size: StringConstructor;
icon: StringConstructor;
iconPack: StringConstructor;
iconSize: StringConstructor;
autoClose: {
type: BooleanConstructor;
default: boolean;
};
duration: {
type: NumberConstructor;
default: number;
};
progressBar: {
type: BooleanConstructor;
default: boolean;
};
}, unknown, {
isActive: boolean;
remainingTime: number;
newIconSize: string;
timer: ReturnType<typeof setTimeout> | undefined;
}, {
computedIcon(): string | null;
}, {
close(): void;
click(): void;
setAutoClose(): void;
setDurationProgress(): void;
resetDurationProgress(): void;
}, ComponentOptionsMixin, ComponentOptionsMixin, {
click: () => true;
close: () => true;
'update:modelValue': (value: boolean) => true;
}, string, PublicProps, Readonly<ExtractPropTypes<    {
modelValue: {
type: BooleanConstructor;
default: boolean;
};
title: StringConstructor;
closable: {
type: BooleanConstructor;
default: boolean;
};
message: StringConstructor;
type: StringConstructor;
hasIcon: BooleanConstructor;
size: StringConstructor;
icon: StringConstructor;
iconPack: StringConstructor;
iconSize: StringConstructor;
autoClose: {
type: BooleanConstructor;
default: boolean;
};
duration: {
type: NumberConstructor;
default: number;
};
progressBar: {
type: BooleanConstructor;
default: boolean;
};
}>> & {
onClick?: (() => any) | undefined;
onClose?: (() => any) | undefined;
"onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
}, {
modelValue: boolean;
duration: number;
hasIcon: boolean;
closable: boolean;
autoClose: boolean;
progressBar: boolean;
}, {}>, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {
position: StringConstructor;
ariaCloseLabel: StringConstructor;
animation: {
type: StringConstructor;
default: string;
};
}>>, {
animation: string;
}, {}>;

export declare const BNumberinput: DefineComponent<    {
modelValue: PropType<number | null>;
min: {
type: (NumberConstructor | StringConstructor)[];
};
max: (NumberConstructor | StringConstructor)[];
step: (NumberConstructor | StringConstructor)[];
minStep: (NumberConstructor | StringConstructor)[];
exponential: (NumberConstructor | BooleanConstructor)[];
disabled: BooleanConstructor;
type: {
type: StringConstructor;
default: string;
};
editable: {
type: BooleanConstructor;
default: boolean;
};
controls: {
type: BooleanConstructor;
default: boolean;
};
controlsAlignment: {
type: PropType<ControlsAlignment>;
default: string;
validator: (value: ControlsAlignment) => boolean;
};
controlsRounded: {
type: BooleanConstructor;
default: boolean;
};
controlsPosition: StringConstructor;
placeholder: (NumberConstructor | StringConstructor)[];
ariaMinusLabel: StringConstructor;
ariaPlusLabel: StringConstructor;
longPress: {
type: BooleanConstructor;
default: boolean;
};
autocomplete: StringConstructor;
}, unknown, {
newValue: number | null | undefined;
newStep: string | number;
newMinStep: string | number | undefined;
timesPressed: number;
_elementRef: string;
_$intervalRef: ReturnType<typeof setTimeout> | undefined;
}, {
computedValue: {
get(): number | string | null | undefined;
set(value: number | string | null | undefined): void;
};
controlsLeft(): ControlOperation[];
controlsRight(): ControlOperation[];
fieldClasses(): ({
'has-addons': boolean;
'is-grouped'?: undefined;
'is-expanded'?: undefined;
} | {
'is-grouped': boolean;
'has-addons'?: undefined;
'is-expanded'?: undefined;
} | {
'is-expanded': boolean;
'has-addons'?: undefined;
'is-grouped'?: undefined;
})[];
buttonClasses(): (string | {
'is-rounded': boolean;
} | undefined)[];
minNumber(): number | undefined;
maxNumber(): number | undefined;
stepNumber(): number;
minStepNumber(): number | "any";
disabledMin(): boolean;
disabledMax(): boolean;
stepDecimals(): number;
disabledOrUndefined(): true | undefined;
}, {
isDisabled(control: ControlOperation): boolean;
decrement(): void;
increment(): void;
onControlClick(event: MouseEvent, inc: boolean): void;
longPressTick(inc: boolean): void;
onStartLongPress(event: MouseEvent | TouchEvent, inc: boolean): void;
onStopLongPress(): void;
}, DefineComponent<    {
compatFallthrough: {
type: BooleanConstructor;
default: () => boolean;
};
}, unknown, unknown, {
rootAttrs(): {
class: unknown;
style: StyleValue;
id: string | undefined;
} | {
class?: undefined;
style?: undefined;
id?: undefined;
};
fallthroughAttrs(): {
[x: string]: unknown;
};
}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {
compatFallthrough: {
type: BooleanConstructor;
default: () => boolean;
};
}>>, {
compatFallthrough: boolean;
}, {}> | DefineComponent<    {
size: StringConstructor;
expanded: BooleanConstructor;
loading: BooleanConstructor;
rounded: BooleanConstructor;
icon: StringConstructor;
iconPack: StringConstructor;
maxlength: (NumberConstructor | StringConstructor)[];
useHtml5Validation: {
type: BooleanConstructor;
default: () => boolean;
};
validationMessage: StringConstructor;
locale: {
type: (StringConstructor | {
(arrayLength: number): string[];
(...items: string[]): string[];
new (arrayLength: number): string[];
new (...items: string[]): string[];
isArray(arg: any): arg is any[];
readonly prototype: any[];
from<T>(arrayLike: ArrayLike<T>): T[];
from<T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
from<T>(iterable: Iterable<T> | ArrayLike<T>): T[];
from<T, U>(iterable: Iterable<T> | ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
of<T>(...items: T[]): T[];
readonly [Symbol.species]: ArrayConstructor;
})[];
default: () => string | string[] | null | undefined;
};
statusIcon: {
type: BooleanConstructor;
default: () => boolean;
};
}, unknown, {
isValid: boolean;
isFocused: boolean;
newIconPack: string;
_elementRef: string;
}, {
parentField(): CreateComponentPublicInstance<Readonly<ExtractPropTypes<    {
type: {
type: PropType<FieldTypeProp>;
default: undefined;
};
label: StringConstructor;
labelFor: StringConstructor;
message: {
type: PropType<FieldMessageProp>;
default: undefined;
};
grouped: BooleanConstructor;
groupMultiline: BooleanConstructor;
position: StringConstructor;
expanded: BooleanConstructor;
horizontal: BooleanConstructor;
addons: {
type: BooleanConstructor;
default: boolean;
};
customClass: StringConstructor;
labelPosition: {
type: StringConstructor;
default: () => FieldLabelPosition | null | undefined;
};
}>>, unknown, {
newType: FieldTypeProp | null;
newMessage: FieldMessageProp | null;
fieldLabelSize: string | null;
numberInputClasses: string[];
_isField: boolean;
}, {
rootClasses(): (string[] | {
'is-expanded': boolean;
'is-horizontal': boolean;
'is-floating-in-label': boolean | "" | undefined;
'is-floating-label': boolean | "" | undefined;
})[];
innerFieldClasses(): (string | {
'is-grouped-multiline': boolean;
} | undefined)[];
hasInnerField(): boolean;
newPosition(): string | undefined;
formattedMessage(): string[] | "";
hasLabel(): string | Slot<any> | undefined;
hasMessage(): Slot<any> | FieldMessagePropItem | FieldMessagePropItem[] | undefined;
}, {
fieldType(): "is-grouped" | "has-addons" | undefined;
hasAddons(): boolean;
wrapNumberinput({ controlsPosition, size }: {
controlsPosition?: string;
size?: string;
}): void;
}, ComponentOptionsMixin, ComponentOptionsMixin, {}, VNodeProps & AllowedComponentProps & ComponentCustomProps & Readonly<ExtractPropTypes<    {
type: {
type: PropType<FieldTypeProp>;
default: undefined;
};
label: StringConstructor;
labelFor: StringConstructor;
message: {
type: PropType<FieldMessageProp>;
default: undefined;
};
grouped: BooleanConstructor;
groupMultiline: BooleanConstructor;
position: StringConstructor;
expanded: BooleanConstructor;
horizontal: BooleanConstructor;
addons: {
type: BooleanConstructor;
default: boolean;
};
customClass: StringConstructor;
labelPosition: {
type: StringConstructor;
default: () => FieldLabelPosition | null | undefined;
};
}>>, {
type: FieldTypeProp;
expanded: boolean;
message: FieldMessageProp;
grouped: boolean;
groupMultiline: boolean;
horizontal: boolean;
addons: boolean;
labelPosition: string;
}, true, {}, {}, {
P: {};
B: {};
D: {};
C: {};
M: {};
Defaults: {};
}, Readonly<ExtractPropTypes<    {
type: {
type: PropType<FieldTypeProp>;
default: undefined;
};
label: StringConstructor;
labelFor: StringConstructor;
message: {
type: PropType<FieldMessageProp>;
default: undefined;
};
grouped: BooleanConstructor;
groupMultiline: BooleanConstructor;
position: StringConstructor;
expanded: BooleanConstructor;
horizontal: BooleanConstructor;
addons: {
type: BooleanConstructor;
default: boolean;
};
customClass: StringConstructor;
labelPosition: {
type: StringConstructor;
default: () => FieldLabelPosition | null | undefined;
};
}>>, {}, {
newType: FieldTypeProp | null;
newMessage: FieldMessageProp | null;
fieldLabelSize: string | null;
numberInputClasses: string[];
_isField: boolean;
}, {
rootClasses(): (string[] | {
'is-expanded': boolean;
'is-horizontal': boolean;
'is-floating-in-label': boolean | "" | undefined;
'is-floating-label': boolean | "" | undefined;
})[];
innerFieldClasses(): (string | {
'is-grouped-multiline': boolean;
} | undefined)[];
hasInnerField(): boolean;
newPosition(): string | undefined;
formattedMessage(): string[] | "";
hasLabel(): string | Slot<any> | undefined;
hasMessage(): Slot<any> | FieldMessagePropItem | FieldMessagePropItem[] | undefined;
}, {
fieldType(): "is-grouped" | "has-addons" | undefined;
hasAddons(): boolean;
wrapNumberinput({ controlsPosition, size }: {
controlsPosition?: string;
size?: string;
}): void;
}, {
type: FieldTypeProp;
expanded: boolean;
message: FieldMessageProp;
grouped: boolean;
groupMultiline: boolean;
horizontal: boolean;
addons: boolean;
labelPosition: string;
}> | undefined;
statusType(): string | undefined;
statusMessage(): Slot<any> | FieldMessagePropItem | FieldMessagePropItem[] | undefined;
iconSize(): "" | "is-medium" | "is-small" | undefined;
}, {
focus(): void;
onBlur($event?: Event): void;
onFocus($event?: Event): void;
getElement(): HTMLInputElement | HTMLButtonElement | HTMLFieldSetElement | HTMLOutputElement | HTMLSelectElement | HTMLTextAreaElement;
setInvalid(): void;
setValidity(type: FieldTypeProp | null, message: FieldMessageProp | null): void;
checkHtml5Validity(): boolean;
}, ComponentOptionsMixin, ComponentOptionsMixin, {
blur: (event?: Event) => true;
focus: (event?: Event) => true;
}, string, PublicProps, Readonly<ExtractPropTypes<    {
size: StringConstructor;
expanded: BooleanConstructor;
loading: BooleanConstructor;
rounded: BooleanConstructor;
icon: StringConstructor;
iconPack: StringConstructor;
maxlength: (NumberConstructor | StringConstructor)[];
useHtml5Validation: {
type: BooleanConstructor;
default: () => boolean;
};
validationMessage: StringConstructor;
locale: {
type: (StringConstructor | {
(arrayLength: number): string[];
(...items: string[]): string[];
new (arrayLength: number): string[];
new (...items: string[]): string[];
isArray(arg: any): arg is any[];
readonly prototype: any[];
from<T>(arrayLike: ArrayLike<T>): T[];
from<T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
from<T>(iterable: Iterable<T> | ArrayLike<T>): T[];
from<T, U>(iterable: Iterable<T> | ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
of<T>(...items: T[]): T[];
readonly [Symbol.species]: ArrayConstructor;
})[];
default: () => string | string[] | null | undefined;
};
statusIcon: {
type: BooleanConstructor;
default: () => boolean;
};
}>> & {
onFocus?: ((event?: Event | undefined) => any) | undefined;
onBlur?: ((event?: Event | undefined) => any) | undefined;
}, {
rounded: boolean;
loading: boolean;
expanded: boolean;
locale: string | string[];
useHtml5Validation: boolean;
statusIcon: boolean;
}, {}>, ComponentOptionsMixin, {
blur: (_event: Event) => true;
focus: (_event: Event) => true;
'update:modelValue': (_value: number | null | undefined) => true;
}, string, PublicProps, Readonly<ExtractPropTypes<    {
modelValue: PropType<number | null>;
min: {
type: (NumberConstructor | StringConstructor)[];
};
max: (NumberConstructor | StringConstructor)[];
step: (NumberConstructor | StringConstructor)[];
minStep: (NumberConstructor | StringConstructor)[];
exponential: (NumberConstructor | BooleanConstructor)[];
disabled: BooleanConstructor;
type: {
type: StringConstructor;
default: string;
};
editable: {
type: BooleanConstructor;
default: boolean;
};
controls: {
type: BooleanConstructor;
default: boolean;
};
controlsAlignment: {
type: PropType<ControlsAlignment>;
default: string;
validator: (value: ControlsAlignment) => boolean;
};
controlsRounded: {
type: BooleanConstructor;
default: boolean;
};
controlsPosition: StringConstructor;
placeholder: (NumberConstructor | StringConstructor)[];
ariaMinusLabel: StringConstructor;
ariaPlusLabel: StringConstructor;
longPress: {
type: BooleanConstructor;
default: boolean;
};
autocomplete: StringConstructor;
}>> & {
onFocus?: ((_event: Event) => any) | undefined;
onBlur?: ((_event: Event) => any) | undefined;
"onUpdate:modelValue"?: ((_value: number | null | undefined) => any) | undefined;
}, {
type: string;
disabled: boolean;
editable: boolean;
controls: boolean;
controlsAlignment: "center" | "left" | "right";
controlsRounded: boolean;
longPress: boolean;
}, {}>;

export declare const BPagination: DefineComponent<    {
total: (NumberConstructor | StringConstructor)[];
perPage: {
type: (NumberConstructor | StringConstructor)[];
default: number;
};
modelValue: {
type: (NumberConstructor | StringConstructor)[];
default: number;
};
rangeBefore: {
type: (NumberConstructor | StringConstructor)[];
default: number;
};
rangeAfter: {
type: (NumberConstructor | StringConstructor)[];
default: number;
};
size: StringConstructor;
simple: BooleanConstructor;
rounded: BooleanConstructor;
order: StringConstructor;
iconPack: StringConstructor;
iconPrev: {
type: StringConstructor;
default: () => string;
};
iconNext: {
type: StringConstructor;
default: () => string;
};
ariaNextLabel: StringConstructor;
ariaPreviousLabel: StringConstructor;
ariaPageLabel: StringConstructor;
ariaCurrentLabel: StringConstructor;
pageInput: {
type: BooleanConstructor;
default: boolean;
};
pageInputPosition: StringConstructor;
debouncePageInput: (NumberConstructor | StringConstructor)[];
}, unknown, {
inputValue: string | number;
debounceHandlePageInput: ((event: Event) => void) | undefined;
}, {
rootClasses(): (string | {
'is-simple': boolean;
'is-rounded': boolean;
'has-input': boolean;
} | undefined)[];
beforeCurrent(): number;
afterCurrent(): number;
pageCount(): number;
firstItem(): number;
hasPrev(): boolean;
hasFirst(): boolean;
hasFirstEllipsis(): boolean;
hasLast(): boolean;
hasLastEllipsis(): boolean;
hasNext(): boolean;
pagesInRange(): PaginationPage[] | undefined;
}, {
prev(event?: Event): void;
next(event?: Event): void;
first(event?: Event): void;
last(event?: Event): void;
changePage(num: number, event?: Event): void;
getPage(num: number, options?: PaginationPageOptions): PaginationPage;
getAriaPageLabel(pageNumber: number, isCurrent: boolean): string | null;
handleOnInputPageChange(event: Event): void;
handleOnInputDebounce(event: Event): void;
handleOnKeyPress(event: KeyboardEvent): true | void;
handleAllowableInputPageRange(event: Event): void;
handleOnInputValue(event: Event): void;
}, ComponentOptionsMixin, ComponentOptionsMixin, {
change: (_num: number) => true;
'update:modelValue': (_num: number) => true;
}, string, PublicProps, Readonly<ExtractPropTypes<    {
total: (NumberConstructor | StringConstructor)[];
perPage: {
type: (NumberConstructor | StringConstructor)[];
default: number;
};
modelValue: {
type: (NumberConstructor | StringConstructor)[];
default: number;
};
rangeBefore: {
type: (NumberConstructor | StringConstructor)[];
default: number;
};
rangeAfter: {
type: (NumberConstructor | StringConstructor)[];
default: number;
};
size: StringConstructor;
simple: BooleanConstructor;
rounded: BooleanConstructor;
order: StringConstructor;
iconPack: StringConstructor;
iconPrev: {
type: StringConstructor;
default: () => string;
};
iconNext: {
type: StringConstructor;
default: () => string;
};
ariaNextLabel: StringConstructor;
ariaPreviousLabel: StringConstructor;
ariaPageLabel: StringConstructor;
ariaCurrentLabel: StringConstructor;
pageInput: {
type: BooleanConstructor;
default: boolean;
};
pageInputPosition: StringConstructor;
debouncePageInput: (NumberConstructor | StringConstructor)[];
}>> & {
onChange?: ((_num: number) => any) | undefined;
"onUpdate:modelValue"?: ((_num: number) => any) | undefined;
}, {
modelValue: string | number;
rounded: boolean;
iconPrev: string;
iconNext: string;
perPage: string | number;
rangeBefore: string | number;
rangeAfter: string | number;
simple: boolean;
pageInput: boolean;
}, {}>;

export declare const BPaginationButton: DefineComponent<    {
page: {
type: PropType<PaginationPage>;
required: true;
};
tag: {
type: (StringConstructor | ObjectConstructor)[];
default: string;
validator: (value: unknown) => boolean;
};
disabled: {
type: BooleanConstructor;
default: boolean;
};
}, unknown, unknown, {
href(): "#" | undefined;
isDisabled(): boolean;
disabledOrUndefined(): true | undefined;
}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {
page: {
type: PropType<PaginationPage>;
required: true;
};
tag: {
type: (StringConstructor | ObjectConstructor)[];
default: string;
validator: (value: unknown) => boolean;
};
disabled: {
type: BooleanConstructor;
default: boolean;
};
}>>, {
tag: string | Record<string, any>;
disabled: boolean;
}, {}>;

export declare const BProgress: DefineComponent<    {
type: {
type: (StringConstructor | ObjectConstructor)[];
default: string;
};
size: {
type: StringConstructor;
};
rounded: {
type: BooleanConstructor;
default: boolean;
};
value: {
type: NumberConstructor;
default: undefined;
};
max: {
type: NumberConstructor;
default: number;
};
showValue: {
type: BooleanConstructor;
default: boolean;
};
format: {
type: StringConstructor;
default: string;
validator: (value: string) => boolean;
};
precision: {
type: NumberConstructor;
default: number;
};
keepTrailingZeroes: {
type: BooleanConstructor;
default: boolean;
};
locale: {
type: (StringConstructor | {
(arrayLength: number): string[];
(...items: string[]): string[];
new (arrayLength: number): string[];
new (...items: string[]): string[];
isArray(arg: any): arg is any[];
readonly prototype: any[];
from<T>(arrayLike: ArrayLike<T>): T[];
from<T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
from<T>(iterable: Iterable<T> | ArrayLike<T>): T[];
from<T, U>(iterable: Iterable<T> | ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
of<T>(...items: T[]): T[];
readonly [Symbol.species]: ArrayConstructor;
})[];
default: () => string | string[] | null | undefined;
validator: (value: unknown) => boolean;
};
}, unknown, unknown, {
isIndeterminate(): boolean;
newType(): (string | Record<string, any> | undefined)[];
newValue(): string | undefined;
isNative(): boolean;
wrapperClasses(): {
[x: string]: boolean;
'is-not-native': boolean;
};
}, {
calculateValue(value: number | undefined): string | undefined;
}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {
type: {
type: (StringConstructor | ObjectConstructor)[];
default: string;
};
size: {
type: StringConstructor;
};
rounded: {
type: BooleanConstructor;
default: boolean;
};
value: {
type: NumberConstructor;
default: undefined;
};
max: {
type: NumberConstructor;
default: number;
};
showValue: {
type: BooleanConstructor;
default: boolean;
};
format: {
type: StringConstructor;
default: string;
validator: (value: string) => boolean;
};
precision: {
type: NumberConstructor;
default: number;
};
keepTrailingZeroes: {
type: BooleanConstructor;
default: boolean;
};
locale: {
type: (StringConstructor | {
(arrayLength: number): string[];
(...items: string[]): string[];
new (arrayLength: number): string[];
new (...items: string[]): string[];
isArray(arg: any): arg is any[];
readonly prototype: any[];
from<T>(arrayLike: ArrayLike<T>): T[];
from<T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
from<T>(iterable: Iterable<T> | ArrayLike<T>): T[];
from<T, U>(iterable: Iterable<T> | ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
of<T>(...items: T[]): T[];
readonly [Symbol.species]: ArrayConstructor;
})[];
default: () => string | string[] | null | undefined;
validator: (value: unknown) => boolean;
};
}>>, {
value: number;
max: number;
type: string | Record<string, any>;
rounded: boolean;
showValue: boolean;
format: string;
precision: number;
keepTrailingZeroes: boolean;
locale: string | string[];
}, {}>;

export declare const BProgressBar: DefineComponent<    {
type: {
type: StringConstructor[];
default: undefined;
};
value: {
type: NumberConstructor;
default: undefined;
};
showValue: {
type: BooleanConstructor;
default: boolean;
};
}, unknown, unknown, {
parentProgress(): ProgressInstance;
newType(): (string | Record<string, any> | undefined)[];
newShowValue(): boolean;
newValue(): string | undefined;
barWidth(): string;
}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {
type: {
type: StringConstructor[];
default: undefined;
};
value: {
type: NumberConstructor;
default: undefined;
};
showValue: {
type: BooleanConstructor;
default: boolean;
};
}>>, {
value: number;
type: string;
showValue: boolean;
}, {}>;

export declare const BRadio: DefineComponent<    {}, {}, {}, {}, {}, DefineComponent<    {
modelValue: (ArrayConstructor | NumberConstructor | StringConstructor | ObjectConstructor | BooleanConstructor | FunctionConstructor)[];
nativeValue: (ArrayConstructor | NumberConstructor | StringConstructor | ObjectConstructor | BooleanConstructor | FunctionConstructor)[];
type: StringConstructor;
disabled: BooleanConstructor;
required: BooleanConstructor;
name: StringConstructor;
size: StringConstructor;
}, unknown, {
newValue: string | number | boolean | Function | unknown[] | Record<string, any> | undefined;
}, {
computedValue: {
get(): string | number | boolean | Function | unknown[] | Record<string, any> | undefined;
set(value: any): void;
};
disabledOrUndefined(): true | undefined;
requiredOrUndefined(): true | undefined;
}, {
focus(): void;
}, ComponentOptionsMixin, ComponentOptionsMixin, {
'update:modelValue': (value: any) => true;
}, string, PublicProps, Readonly<ExtractPropTypes<    {
modelValue: (ArrayConstructor | NumberConstructor | StringConstructor | ObjectConstructor | BooleanConstructor | FunctionConstructor)[];
nativeValue: (ArrayConstructor | NumberConstructor | StringConstructor | ObjectConstructor | BooleanConstructor | FunctionConstructor)[];
type: StringConstructor;
disabled: BooleanConstructor;
required: BooleanConstructor;
name: StringConstructor;
size: StringConstructor;
}>> & {
"onUpdate:modelValue"?: ((value: any) => any) | undefined;
}, {
required: boolean;
disabled: boolean;
}, {}>, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {}>>, {}, {}>;

export declare const BRadioButton: DefineComponent<    {
type: {
type: StringConstructor;
default: string;
};
expanded: BooleanConstructor;
}, unknown, {
isFocused: boolean;
}, {
isSelected(): boolean;
labelClass(): (string | {
'is-selected': boolean;
'is-disabled': boolean;
'is-focused': boolean;
} | null | undefined)[];
}, {}, DefineComponent<    {
modelValue: (ArrayConstructor | NumberConstructor | StringConstructor | ObjectConstructor | BooleanConstructor | FunctionConstructor)[];
nativeValue: (ArrayConstructor | NumberConstructor | StringConstructor | ObjectConstructor | BooleanConstructor | FunctionConstructor)[];
type: StringConstructor;
disabled: BooleanConstructor;
required: BooleanConstructor;
name: StringConstructor;
size: StringConstructor;
}, unknown, {
newValue: string | number | boolean | Function | unknown[] | Record<string, any> | undefined;
}, {
computedValue: {
get(): string | number | boolean | Function | unknown[] | Record<string, any> | undefined;
set(value: any): void;
};
disabledOrUndefined(): true | undefined;
requiredOrUndefined(): true | undefined;
}, {
focus(): void;
}, ComponentOptionsMixin, ComponentOptionsMixin, {
'update:modelValue': (value: any) => true;
}, string, PublicProps, Readonly<ExtractPropTypes<    {
modelValue: (ArrayConstructor | NumberConstructor | StringConstructor | ObjectConstructor | BooleanConstructor | FunctionConstructor)[];
nativeValue: (ArrayConstructor | NumberConstructor | StringConstructor | ObjectConstructor | BooleanConstructor | FunctionConstructor)[];
type: StringConstructor;
disabled: BooleanConstructor;
required: BooleanConstructor;
name: StringConstructor;
size: StringConstructor;
}>> & {
"onUpdate:modelValue"?: ((value: any) => any) | undefined;
}, {
required: boolean;
disabled: boolean;
}, {}>, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {
type: {
type: StringConstructor;
default: string;
};
expanded: BooleanConstructor;
}>>, {
type: string;
expanded: boolean;
}, {}>;

export declare const BRate: DefineComponent<    {
modelValue: {
type: NumberConstructor;
default: number;
};
max: {
type: NumberConstructor;
default: number;
};
icon: {
type: StringConstructor;
default: string;
};
iconPack: StringConstructor;
size: StringConstructor;
spaced: BooleanConstructor;
rtl: BooleanConstructor;
disabled: BooleanConstructor;
showScore: BooleanConstructor;
showText: BooleanConstructor;
customText: StringConstructor;
texts: {
(arrayLength: number): string[];
(...items: string[]): string[];
new (arrayLength: number): string[];
new (...items: string[]): string[];
isArray(arg: any): arg is any[];
readonly prototype: any[];
from<T>(arrayLike: ArrayLike<T>): T[];
from<T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
from<T>(iterable: Iterable<T> | ArrayLike<T>): T[];
from<T, U>(iterable: Iterable<T> | ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
of<T>(...items: T[]): T[];
readonly [Symbol.species]: ArrayConstructor;
};
locale: {
type: (StringConstructor | {
(arrayLength: number): string[];
(...items: string[]): string[];
new (arrayLength: number): string[];
new (...items: string[]): string[];
isArray(arg: any): arg is any[];
readonly prototype: any[];
from<T>(arrayLike: ArrayLike<T>): T[];
from<T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
from<T>(iterable: Iterable<T> | ArrayLike<T>): T[];
from<T, U>(iterable: Iterable<T> | ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
of<T>(...items: T[]): T[];
readonly [Symbol.species]: ArrayConstructor;
})[];
default: () => string | string[] | null | undefined;
};
}, unknown, {
newValue: number;
hoverValue: number;
}, {
halfStyle(): string;
showMe(): string;
valueDecimal(): number;
}, {
resetNewValue(): void;
previewRate(index: number, event: {
stopPropagation: () => void;
}): void;
confirmValue(index: number): void;
checkHalf(index: number): boolean;
rateClass(index: number): string;
}, ComponentOptionsMixin, ComponentOptionsMixin, {
change: (newValue: number) => true;
'update:modelValue': (newValue: number) => true;
}, string, PublicProps, Readonly<ExtractPropTypes<    {
modelValue: {
type: NumberConstructor;
default: number;
};
max: {
type: NumberConstructor;
default: number;
};
icon: {
type: StringConstructor;
default: string;
};
iconPack: StringConstructor;
size: StringConstructor;
spaced: BooleanConstructor;
rtl: BooleanConstructor;
disabled: BooleanConstructor;
showScore: BooleanConstructor;
showText: BooleanConstructor;
customText: StringConstructor;
texts: {
(arrayLength: number): string[];
(...items: string[]): string[];
new (arrayLength: number): string[];
new (...items: string[]): string[];
isArray(arg: any): arg is any[];
readonly prototype: any[];
from<T>(arrayLike: ArrayLike<T>): T[];
from<T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
from<T>(iterable: Iterable<T> | ArrayLike<T>): T[];
from<T, U>(iterable: Iterable<T> | ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
of<T>(...items: T[]): T[];
readonly [Symbol.species]: ArrayConstructor;
};
locale: {
type: (StringConstructor | {
(arrayLength: number): string[];
(...items: string[]): string[];
new (arrayLength: number): string[];
new (...items: string[]): string[];
isArray(arg: any): arg is any[];
readonly prototype: any[];
from<T>(arrayLike: ArrayLike<T>): T[];
from<T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
from<T>(iterable: Iterable<T> | ArrayLike<T>): T[];
from<T, U>(iterable: Iterable<T> | ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
of<T>(...items: T[]): T[];
readonly [Symbol.species]: ArrayConstructor;
})[];
default: () => string | string[] | null | undefined;
};
}>> & {
onChange?: ((newValue: number) => any) | undefined;
"onUpdate:modelValue"?: ((newValue: number) => any) | undefined;
}, {
max: number;
icon: string;
modelValue: number;
disabled: boolean;
locale: string | string[];
spaced: boolean;
rtl: boolean;
showScore: boolean;
showText: boolean;
}, {}>;

export declare const Breadcrumb: {
    install(Vue: App): void;
};

declare type BreakpointOptions = Partial<BreakpointSettings>;

declare interface BreakpointSettings {
    arrowHover: boolean;
    hasGrayscale?: boolean;
    hasOpacity?: boolean;
    repeat?: boolean;
    hasDrag: boolean;
    itemsToShow: number;
    itemsToList: number;
    iconPack?: string;
    iconSize?: string;
    iconPrev: string;
    iconNext: string;
}

export declare const BSelect: DefineComponent<    {
modelValue: {
type: PropType<ModelValue>;
default: null;
};
placeholder: StringConstructor;
multiple: BooleanConstructor;
nativeSize: (NumberConstructor | StringConstructor)[];
}, unknown, {
selected: any;
_elementRef: string;
}, {
computedValue: {
get(): any;
set(value: ModelValue): void;
};
spanClasses(): (string | {
'is-fullwidth': boolean;
'is-loading': boolean;
'is-multiple': boolean;
'is-rounded': boolean;
'is-empty': boolean;
} | undefined)[];
}, {}, DefineComponent<    {
compatFallthrough: {
type: BooleanConstructor;
default: () => boolean;
};
}, unknown, unknown, {
rootAttrs(): {
class: unknown;
style: StyleValue;
id: string | undefined;
} | {
class?: undefined;
style?: undefined;
id?: undefined;
};
fallthroughAttrs(): {
[x: string]: unknown;
};
}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {
compatFallthrough: {
type: BooleanConstructor;
default: () => boolean;
};
}>>, {
compatFallthrough: boolean;
}, {}> | DefineComponent<    {
size: StringConstructor;
expanded: BooleanConstructor;
loading: BooleanConstructor;
rounded: BooleanConstructor;
icon: StringConstructor;
iconPack: StringConstructor;
maxlength: (NumberConstructor | StringConstructor)[];
useHtml5Validation: {
type: BooleanConstructor;
default: () => boolean;
};
validationMessage: StringConstructor;
locale: {
type: (StringConstructor | {
(arrayLength: number): string[];
(...items: string[]): string[];
new (arrayLength: number): string[];
new (...items: string[]): string[];
isArray(arg: any): arg is any[];
readonly prototype: any[];
from<T>(arrayLike: ArrayLike<T>): T[];
from<T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
from<T>(iterable: Iterable<T> | ArrayLike<T>): T[];
from<T, U>(iterable: Iterable<T> | ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
of<T>(...items: T[]): T[];
readonly [Symbol.species]: ArrayConstructor;
})[];
default: () => string | string[] | null | undefined;
};
statusIcon: {
type: BooleanConstructor;
default: () => boolean;
};
}, unknown, {
isValid: boolean;
isFocused: boolean;
newIconPack: string;
_elementRef: string;
}, {
parentField(): CreateComponentPublicInstance<Readonly<ExtractPropTypes<    {
type: {
type: PropType<FieldTypeProp>;
default: undefined;
};
label: StringConstructor;
labelFor: StringConstructor;
message: {
type: PropType<FieldMessageProp>;
default: undefined;
};
grouped: BooleanConstructor;
groupMultiline: BooleanConstructor;
position: StringConstructor;
expanded: BooleanConstructor;
horizontal: BooleanConstructor;
addons: {
type: BooleanConstructor;
default: boolean;
};
customClass: StringConstructor;
labelPosition: {
type: StringConstructor;
default: () => FieldLabelPosition | null | undefined;
};
}>>, unknown, {
newType: FieldTypeProp | null;
newMessage: FieldMessageProp | null;
fieldLabelSize: string | null;
numberInputClasses: string[];
_isField: boolean;
}, {
rootClasses(): (string[] | {
'is-expanded': boolean;
'is-horizontal': boolean;
'is-floating-in-label': boolean | "" | undefined;
'is-floating-label': boolean | "" | undefined;
})[];
innerFieldClasses(): (string | {
'is-grouped-multiline': boolean;
} | undefined)[];
hasInnerField(): boolean;
newPosition(): string | undefined;
formattedMessage(): string[] | "";
hasLabel(): string | Slot<any> | undefined;
hasMessage(): Slot<any> | FieldMessagePropItem | FieldMessagePropItem[] | undefined;
}, {
fieldType(): "is-grouped" | "has-addons" | undefined;
hasAddons(): boolean;
wrapNumberinput({ controlsPosition, size }: {
controlsPosition?: string;
size?: string;
}): void;
}, ComponentOptionsMixin, ComponentOptionsMixin, {}, VNodeProps & AllowedComponentProps & ComponentCustomProps & Readonly<ExtractPropTypes<    {
type: {
type: PropType<FieldTypeProp>;
default: undefined;
};
label: StringConstructor;
labelFor: StringConstructor;
message: {
type: PropType<FieldMessageProp>;
default: undefined;
};
grouped: BooleanConstructor;
groupMultiline: BooleanConstructor;
position: StringConstructor;
expanded: BooleanConstructor;
horizontal: BooleanConstructor;
addons: {
type: BooleanConstructor;
default: boolean;
};
customClass: StringConstructor;
labelPosition: {
type: StringConstructor;
default: () => FieldLabelPosition | null | undefined;
};
}>>, {
type: FieldTypeProp;
expanded: boolean;
message: FieldMessageProp;
grouped: boolean;
groupMultiline: boolean;
horizontal: boolean;
addons: boolean;
labelPosition: string;
}, true, {}, {}, {
P: {};
B: {};
D: {};
C: {};
M: {};
Defaults: {};
}, Readonly<ExtractPropTypes<    {
type: {
type: PropType<FieldTypeProp>;
default: undefined;
};
label: StringConstructor;
labelFor: StringConstructor;
message: {
type: PropType<FieldMessageProp>;
default: undefined;
};
grouped: BooleanConstructor;
groupMultiline: BooleanConstructor;
position: StringConstructor;
expanded: BooleanConstructor;
horizontal: BooleanConstructor;
addons: {
type: BooleanConstructor;
default: boolean;
};
customClass: StringConstructor;
labelPosition: {
type: StringConstructor;
default: () => FieldLabelPosition | null | undefined;
};
}>>, {}, {
newType: FieldTypeProp | null;
newMessage: FieldMessageProp | null;
fieldLabelSize: string | null;
numberInputClasses: string[];
_isField: boolean;
}, {
rootClasses(): (string[] | {
'is-expanded': boolean;
'is-horizontal': boolean;
'is-floating-in-label': boolean | "" | undefined;
'is-floating-label': boolean | "" | undefined;
})[];
innerFieldClasses(): (string | {
'is-grouped-multiline': boolean;
} | undefined)[];
hasInnerField(): boolean;
newPosition(): string | undefined;
formattedMessage(): string[] | "";
hasLabel(): string | Slot<any> | undefined;
hasMessage(): Slot<any> | FieldMessagePropItem | FieldMessagePropItem[] | undefined;
}, {
fieldType(): "is-grouped" | "has-addons" | undefined;
hasAddons(): boolean;
wrapNumberinput({ controlsPosition, size }: {
controlsPosition?: string;
size?: string;
}): void;
}, {
type: FieldTypeProp;
expanded: boolean;
message: FieldMessageProp;
grouped: boolean;
groupMultiline: boolean;
horizontal: boolean;
addons: boolean;
labelPosition: string;
}> | undefined;
statusType(): string | undefined;
statusMessage(): Slot<any> | FieldMessagePropItem | FieldMessagePropItem[] | undefined;
iconSize(): "" | "is-medium" | "is-small" | undefined;
}, {
focus(): void;
onBlur($event?: Event): void;
onFocus($event?: Event): void;
getElement(): HTMLInputElement | HTMLButtonElement | HTMLFieldSetElement | HTMLOutputElement | HTMLSelectElement | HTMLTextAreaElement;
setInvalid(): void;
setValidity(type: FieldTypeProp | null, message: FieldMessageProp | null): void;
checkHtml5Validity(): boolean;
}, ComponentOptionsMixin, ComponentOptionsMixin, {
blur: (event?: Event) => true;
focus: (event?: Event) => true;
}, string, PublicProps, Readonly<ExtractPropTypes<    {
size: StringConstructor;
expanded: BooleanConstructor;
loading: BooleanConstructor;
rounded: BooleanConstructor;
icon: StringConstructor;
iconPack: StringConstructor;
maxlength: (NumberConstructor | StringConstructor)[];
useHtml5Validation: {
type: BooleanConstructor;
default: () => boolean;
};
validationMessage: StringConstructor;
locale: {
type: (StringConstructor | {
(arrayLength: number): string[];
(...items: string[]): string[];
new (arrayLength: number): string[];
new (...items: string[]): string[];
isArray(arg: any): arg is any[];
readonly prototype: any[];
from<T>(arrayLike: ArrayLike<T>): T[];
from<T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
from<T>(iterable: Iterable<T> | ArrayLike<T>): T[];
from<T, U>(iterable: Iterable<T> | ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
of<T>(...items: T[]): T[];
readonly [Symbol.species]: ArrayConstructor;
})[];
default: () => string | string[] | null | undefined;
};
statusIcon: {
type: BooleanConstructor;
default: () => boolean;
};
}>> & {
onFocus?: ((event?: Event | undefined) => any) | undefined;
onBlur?: ((event?: Event | undefined) => any) | undefined;
}, {
rounded: boolean;
loading: boolean;
expanded: boolean;
locale: string | string[];
useHtml5Validation: boolean;
statusIcon: boolean;
}, {}>, ComponentOptionsMixin, {
blur: (_event: FocusEvent) => true;
focus: (_event: FocusEvent) => true;
'update:modelValue': (_value: ModelValue) => true;
}, string, PublicProps, Readonly<ExtractPropTypes<    {
modelValue: {
type: PropType<ModelValue>;
default: null;
};
placeholder: StringConstructor;
multiple: BooleanConstructor;
nativeSize: (NumberConstructor | StringConstructor)[];
}>> & {
onFocus?: ((_event: FocusEvent) => any) | undefined;
onBlur?: ((_event: FocusEvent) => any) | undefined;
"onUpdate:modelValue"?: ((_value: any) => any) | undefined;
}, {
modelValue: any;
multiple: boolean;
}, {}>;

export declare const BSidebar: DefineComponent<    {
modelValue: BooleanConstructor;
type: PropType<VueClassAttribute>;
overlay: BooleanConstructor;
position: {
type: PropType<SidebarPosition>;
default: string;
validator: (value: SidebarPosition) => boolean;
};
fullheight: BooleanConstructor;
fullwidth: BooleanConstructor;
right: BooleanConstructor;
mobile: {
type: StringConstructor;
};
reduce: BooleanConstructor;
expandOnHover: BooleanConstructor;
expandOnHoverFixed: BooleanConstructor;
delay: {
type: PropType<number | null>;
default: () => number | null | undefined;
};
canCancel: {
type: (BooleanConstructor | {
(arrayLength: number): string[];
(...items: string[]): string[];
new (arrayLength: number): string[];
new (...items: string[]): string[];
isArray(arg: any): arg is any[];
readonly prototype: any[];
from<T>(arrayLike: ArrayLike<T>): T[];
from<T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
from<T>(iterable: Iterable<T> | ArrayLike<T>): T[];
from<T, U>(iterable: Iterable<T> | ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
of<T>(...items: T[]): T[];
readonly [Symbol.species]: ArrayConstructor;
})[];
default: () => CancelMethod[];
};
onCancel: {
type: PropType<CancelHandler>;
default: () => void;
};
scroll: {
type: PropType<ScrollBehavior_2>;
default: () => ModalScrollOption;
validator: (value: ScrollBehavior_2) => boolean;
};
}, unknown, {
isOpen: boolean;
isDelayOver: boolean;
transitionName: string | undefined;
animating: boolean;
savedScrollTop: number | null;
hasLeaved: boolean;
timer: ReturnType<typeof setTimeout> | undefined;
}, {
rootClasses(): VueClassAttribute[];
cancelOptions(): string[];
isStatic(): boolean;
isFixed(): boolean;
isAbsolute(): boolean;
}, {
keyPress({ key }: {
key?: KeyboardEvent["key"];
}): void;
cancel(method: CancelMethod, ...args: any[]): void;
close(): void;
clickedOutside(event: MouseEvent): void;
beforeEnter(): void;
afterEnter(): void;
handleScroll(): void;
onHover(): void;
onHoverLeave(): void;
clickedCloseButton(): void;
}, ComponentOptionsMixin, ComponentOptionsMixin, {
close: () => true;
'update:modelValue': (_value: boolean) => true;
}, string, PublicProps, Readonly<ExtractPropTypes<    {
modelValue: BooleanConstructor;
type: PropType<VueClassAttribute>;
overlay: BooleanConstructor;
position: {
type: PropType<SidebarPosition>;
default: string;
validator: (value: SidebarPosition) => boolean;
};
fullheight: BooleanConstructor;
fullwidth: BooleanConstructor;
right: BooleanConstructor;
mobile: {
type: StringConstructor;
};
reduce: BooleanConstructor;
expandOnHover: BooleanConstructor;
expandOnHoverFixed: BooleanConstructor;
delay: {
type: PropType<number | null>;
default: () => number | null | undefined;
};
canCancel: {
type: (BooleanConstructor | {
(arrayLength: number): string[];
(...items: string[]): string[];
new (arrayLength: number): string[];
new (...items: string[]): string[];
isArray(arg: any): arg is any[];
readonly prototype: any[];
from<T>(arrayLike: ArrayLike<T>): T[];
from<T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
from<T>(iterable: Iterable<T> | ArrayLike<T>): T[];
from<T, U>(iterable: Iterable<T> | ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
of<T>(...items: T[]): T[];
readonly [Symbol.species]: ArrayConstructor;
})[];
default: () => CancelMethod[];
};
onCancel: {
type: PropType<CancelHandler>;
default: () => void;
};
scroll: {
type: PropType<ScrollBehavior_2>;
default: () => ModalScrollOption;
validator: (value: ScrollBehavior_2) => boolean;
};
}>> & {
onClose?: (() => any) | undefined;
"onUpdate:modelValue"?: ((_value: boolean) => any) | undefined;
}, {
scroll: ModalScrollOption;
reduce: boolean;
onCancel: CancelHandler;
modelValue: boolean;
canCancel: boolean | string[];
position: "absolute" | "fixed" | "static";
overlay: boolean;
right: boolean;
delay: number | null;
fullheight: boolean;
fullwidth: boolean;
expandOnHover: boolean;
expandOnHoverFixed: boolean;
}, {}>;

export declare const BSkeleton: DefineComponent<typeof BSkeleton_2.props, // P(rops)
    {}, // B (raw bindings)
    {}, // D(ata)
    {}>;

declare const BSkeleton_2: {
    (props: SkeletonProps): VNode<RendererNode, RendererElement, {
    [key: string]: any;
    }> | undefined;
    props: {
        active: {
            type: BooleanConstructor;
            default: boolean;
        };
        animated: {
            type: BooleanConstructor;
            default: boolean;
        };
        width: (NumberConstructor | StringConstructor)[];
        height: (NumberConstructor | StringConstructor)[];
        circle: BooleanConstructor;
        rounded: {
            type: BooleanConstructor;
            default: boolean;
        };
        count: {
            type: NumberConstructor;
            default: number;
        };
        position: {
            type: StringConstructor;
            default: string;
            validator(value: SkeletonPosition): boolean;
        };
        size: StringConstructor;
    };
};

export declare const BSlider: DefineComponent<    {
modelValue: {
type: (NumberConstructor | {
(arrayLength: number): number[];
(...items: number[]): number[];
new (arrayLength: number): number[];
new (...items: number[]): number[];
isArray(arg: any): arg is any[];
readonly prototype: any[];
from<T>(arrayLike: ArrayLike<T>): T[];
from<T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
from<T>(iterable: Iterable<T> | ArrayLike<T>): T[];
from<T, U>(iterable: Iterable<T> | ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
of<T>(...items: T[]): T[];
readonly [Symbol.species]: ArrayConstructor;
})[];
default: number;
};
min: {
type: NumberConstructor;
default: number;
};
max: {
type: NumberConstructor;
default: number;
};
step: {
type: NumberConstructor;
default: number;
};
type: {
type: StringConstructor;
default: string;
};
size: StringConstructor;
ticks: {
type: BooleanConstructor;
default: boolean;
};
tooltip: {
type: BooleanConstructor;
default: boolean;
};
tooltipType: StringConstructor;
rounded: {
type: BooleanConstructor;
default: boolean;
};
disabled: {
type: BooleanConstructor;
default: boolean;
};
lazy: {
type: BooleanConstructor;
default: boolean;
};
customFormatter: PropType<CustomFormatter>;
ariaLabel: (StringConstructor | {
(arrayLength: number): string[];
(...items: string[]): string[];
new (arrayLength: number): string[];
new (...items: string[]): string[];
isArray(arg: any): arg is any[];
readonly prototype: any[];
from<T>(arrayLike: ArrayLike<T>): T[];
from<T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
from<T>(iterable: Iterable<T> | ArrayLike<T>): T[];
from<T, U>(iterable: Iterable<T> | ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
of<T>(...items: T[]): T[];
readonly [Symbol.species]: ArrayConstructor;
})[];
biggerSliderFocus: {
type: BooleanConstructor;
default: boolean;
};
indicator: {
type: BooleanConstructor;
default: boolean;
};
format: {
type: PropType<DisplayFormat>;
default: string;
validator: (value: DisplayFormat) => boolean;
};
locale: {
type: (StringConstructor | {
(arrayLength: number): string[];
(...items: string[]): string[];
new (arrayLength: number): string[];
new (...items: string[]): string[];
isArray(arg: any): arg is any[];
readonly prototype: any[];
from<T>(arrayLike: ArrayLike<T>): T[];
from<T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
from<T>(iterable: Iterable<T> | ArrayLike<T>): T[];
from<T, U>(iterable: Iterable<T> | ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
of<T>(...items: T[]): T[];
readonly [Symbol.species]: ArrayConstructor;
})[];
default: () => string | string[] | null | undefined;
};
tooltipAlways: {
type: BooleanConstructor;
default: boolean;
};
}, unknown, {
value1: number | undefined;
value2: number | undefined;
internal: {
value1: number | undefined;
value2: number | undefined;
};
dragging: boolean;
isRange: boolean;
isThumbReversed: boolean;
isTrackClickDisabled: boolean;
_isSlider: boolean;
timeOutID: ReturnType<typeof setTimeout> | undefined;
}, {
newTooltipType(): string;
tickValues(): number[];
minValue(): number;
maxValue(): number;
barSize(): string;
barStart(): string;
precision(): number;
barStyle(): {
width: string;
left: string;
};
rootClasses(): {
'is-rounded': boolean;
'is-dragging': boolean;
'is-disabled': boolean;
'slider-focus': boolean;
};
}, {
setValues(newValue: number | number[]): void;
onInternalValueUpdate(): void;
sliderSize(): number;
onSliderClick(event: MouseEvent): void;
onDragStart(): void;
onDragEnd(): void;
emitValue(type: "change" | "dragging" | "update:modelValue"): void;
}, ComponentOptionsMixin, ComponentOptionsMixin, {
change: (_value: number | [number, number]) => true;
dragend: () => true;
dragging: (_value: number | [number, number]) => true;
dragstart: () => true;
'update:modelValue': (_value: number | [number, number]) => true;
}, string, PublicProps, Readonly<ExtractPropTypes<    {
modelValue: {
type: (NumberConstructor | {
(arrayLength: number): number[];
(...items: number[]): number[];
new (arrayLength: number): number[];
new (...items: number[]): number[];
isArray(arg: any): arg is any[];
readonly prototype: any[];
from<T>(arrayLike: ArrayLike<T>): T[];
from<T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
from<T>(iterable: Iterable<T> | ArrayLike<T>): T[];
from<T, U>(iterable: Iterable<T> | ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
of<T>(...items: T[]): T[];
readonly [Symbol.species]: ArrayConstructor;
})[];
default: number;
};
min: {
type: NumberConstructor;
default: number;
};
max: {
type: NumberConstructor;
default: number;
};
step: {
type: NumberConstructor;
default: number;
};
type: {
type: StringConstructor;
default: string;
};
size: StringConstructor;
ticks: {
type: BooleanConstructor;
default: boolean;
};
tooltip: {
type: BooleanConstructor;
default: boolean;
};
tooltipType: StringConstructor;
rounded: {
type: BooleanConstructor;
default: boolean;
};
disabled: {
type: BooleanConstructor;
default: boolean;
};
lazy: {
type: BooleanConstructor;
default: boolean;
};
customFormatter: PropType<CustomFormatter>;
ariaLabel: (StringConstructor | {
(arrayLength: number): string[];
(...items: string[]): string[];
new (arrayLength: number): string[];
new (...items: string[]): string[];
isArray(arg: any): arg is any[];
readonly prototype: any[];
from<T>(arrayLike: ArrayLike<T>): T[];
from<T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
from<T>(iterable: Iterable<T> | ArrayLike<T>): T[];
from<T, U>(iterable: Iterable<T> | ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
of<T>(...items: T[]): T[];
readonly [Symbol.species]: ArrayConstructor;
})[];
biggerSliderFocus: {
type: BooleanConstructor;
default: boolean;
};
indicator: {
type: BooleanConstructor;
default: boolean;
};
format: {
type: PropType<DisplayFormat>;
default: string;
validator: (value: DisplayFormat) => boolean;
};
locale: {
type: (StringConstructor | {
(arrayLength: number): string[];
(...items: string[]): string[];
new (arrayLength: number): string[];
new (...items: string[]): string[];
isArray(arg: any): arg is any[];
readonly prototype: any[];
from<T>(arrayLike: ArrayLike<T>): T[];
from<T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
from<T>(iterable: Iterable<T> | ArrayLike<T>): T[];
from<T, U>(iterable: Iterable<T> | ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
of<T>(...items: T[]): T[];
readonly [Symbol.species]: ArrayConstructor;
})[];
default: () => string | string[] | null | undefined;
};
tooltipAlways: {
type: BooleanConstructor;
default: boolean;
};
}>> & {
onDragend?: (() => any) | undefined;
onDragstart?: (() => any) | undefined;
onChange?: ((_value: number | [number, number]) => any) | undefined;
"onUpdate:modelValue"?: ((_value: number | [number, number]) => any) | undefined;
onDragging?: ((_value: number | [number, number]) => any) | undefined;
}, {
min: number;
max: number;
type: string;
modelValue: number | number[];
rounded: boolean;
disabled: boolean;
format: "raw" | "percent";
locale: string | string[];
lazy: boolean;
indicator: boolean;
tooltip: boolean;
step: number;
tooltipAlways: boolean;
ticks: boolean;
biggerSliderFocus: boolean;
}, {}>;

export declare const BSliderTick: DefineComponent<    {
value: {
type: NumberConstructor;
default: number;
};
}, unknown, unknown, {
parent(): ISlider;
position(): number;
hidden(): boolean;
}, {
getTickStyle(position: number): {
left: string;
};
}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {
value: {
type: NumberConstructor;
default: number;
};
}>>, {
value: number;
}, {}>;

export declare const BSnackbar: DefineComponent<    {
actionText: {
type: StringConstructor;
default: string;
};
onAction: {
type: PropType<() => void>;
default: () => void;
};
cancelText: {
type: StringConstructor;
default: null;
};
}, unknown, {
newDuration: number;
}, {}, {
action(): void;
}, DefineComponent<    {
type: {
type: StringConstructor;
default: string;
};
message: PropType<string | string[]>;
duration: NumberConstructor;
queue: {
type: BooleanConstructor;
default: undefined;
};
indefinite: {
type: BooleanConstructor;
default: boolean;
};
pauseOnHover: {
type: BooleanConstructor;
default: boolean;
};
position: {
type: PropType<NoticePosition>;
default: string;
validator(value: unknown): value is NoticePosition;
};
container: StringConstructor;
}, unknown, {
isActive: boolean;
isPaused: boolean;
parentTop: Element | null;
parentBottom: Element | null;
newContainer: string | null | undefined;
timer: ReturnType<typeof setTimeout> | undefined;
newDuration: number;
}, {
correctParent(): Element;
transition(): {
enter: string;
leave: string;
};
}, {
pause(): void;
removePause(): void;
shouldQueue(): boolean;
click(): void;
close(): void;
timeoutCallback(): void;
showNotice(): void;
setupContainer(): void;
}, ComponentOptionsMixin, ComponentOptionsMixin, {
click: () => true;
close: () => true;
}, string, PublicProps, Readonly<ExtractPropTypes<    {
type: {
type: StringConstructor;
default: string;
};
message: PropType<string | string[]>;
duration: NumberConstructor;
queue: {
type: BooleanConstructor;
default: undefined;
};
indefinite: {
type: BooleanConstructor;
default: boolean;
};
pauseOnHover: {
type: BooleanConstructor;
default: boolean;
};
position: {
type: PropType<NoticePosition>;
default: string;
validator(value: unknown): value is NoticePosition;
};
container: StringConstructor;
}>> & {
onClick?: (() => any) | undefined;
onClose?: (() => any) | undefined;
}, {
type: string;
position: "is-top-right" | "is-top" | "is-top-left" | "is-bottom-right" | "is-bottom" | "is-bottom-left";
queue: boolean;
indefinite: boolean;
pauseOnHover: boolean;
}, {}>, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {
actionText: {
type: StringConstructor;
default: string;
};
onAction: {
type: PropType<() => void>;
default: () => void;
};
cancelText: {
type: StringConstructor;
default: null;
};
}>>, {
cancelText: string;
actionText: string;
onAction: () => void;
}, {}>;

export declare const BStepItem: DefineComponent<    {
step: (NumberConstructor | StringConstructor)[];
type: PropType<VueClassAttribute>;
clickable: {
type: BooleanConstructor;
default: undefined;
};
}, unknown, {
elementClass: string;
}, {}, {}, DefineComponent<    {
label: StringConstructor;
icon: StringConstructor;
iconPack: StringConstructor;
visible: {
type: BooleanConstructor;
default: boolean;
};
headerClass: {
type: PropType<VueClassAttribute>;
default: null;
};
}, unknown, {
transitionName: TransitionName | null;
elementClass: string;
elementRole: string | null;
}, {
isActive(): boolean;
}, {
activate(oldIndex: number): void;
deactivate(newIndex: number): void;
}, InjectedChildMixin<1, TabbedParent>, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {
label: StringConstructor;
icon: StringConstructor;
iconPack: StringConstructor;
visible: {
type: BooleanConstructor;
default: boolean;
};
headerClass: {
type: PropType<VueClassAttribute>;
default: null;
};
}>>, {
visible: boolean;
headerClass: VueClassAttribute;
}, {}>, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {
step: (NumberConstructor | StringConstructor)[];
type: PropType<VueClassAttribute>;
clickable: {
type: BooleanConstructor;
default: undefined;
};
}>>, {
clickable: boolean;
}, {}>;

export declare const BSteps: DefineComponent<    {
type: PropType<VueClassAttribute>;
iconPack: StringConstructor;
iconPrev: {
type: StringConstructor;
default: () => string;
};
iconNext: {
type: StringConstructor;
default: () => string;
};
hasNavigation: {
type: BooleanConstructor;
default: boolean;
};
labelPosition: {
type: PropType<LabelPosition>;
validator(value: LabelPosition): boolean;
default: string;
};
rounded: {
type: BooleanConstructor;
default: boolean;
};
mobileMode: {
type: PropType<MobileMode>;
validator(value: MobileMode): boolean;
default: string;
};
ariaNextLabel: StringConstructor;
ariaPreviousLabel: StringConstructor;
}, unknown, unknown, {
activeItem(): {
type?: string | Record<string, boolean | undefined> | (string | Record<string, boolean | undefined> | null | undefined)[] | null | undefined;
step?: number | string | undefined;
clickable?: boolean | undefined;
visible: boolean;
disabled?: boolean | undefined;
isActive: boolean;
label?: string | undefined;
headerClass: string | Record<string, boolean | undefined> | (string | Record<string, boolean | undefined> | null | undefined)[] | null | undefined;
icon?: string | undefined;
iconPack?: string | undefined;
$slots: Slots;
activate: (oldIndex: number) => void;
deactivate: (newIndex: number) => void;
uniqueValue: string | number;
index: number;
dynamicIndex?: number | undefined;
};
wrapperClasses(): (string | {
[x: string]: boolean | "" | undefined;
'is-vertical': boolean;
} | undefined)[];
mainClasses(): VueClassAttribute[];
hasPrev(): boolean;
nextItemIdx(): number | null;
nextItem(): IStepItem | null | undefined;
prevItemIdx(): number | null;
prevItem(): IStepItem | null | undefined;
hasNext(): boolean;
navigationProps(): {
previous: {
disabled: boolean;
action: () => void;
};
next: {
disabled: boolean;
action: () => void;
};
};
}, {
isItemClickable(stepItem: IStepItem): boolean;
prev(): void;
next(): void;
}, DefineComponent<    {
modelValue: {
type: PropType<string | number | null | undefined>;
default: undefined;
};
size: StringConstructor;
animated: {
type: BooleanConstructor;
default: boolean;
};
animation: StringConstructor;
animateInitially: BooleanConstructor;
vertical: {
type: BooleanConstructor;
default: boolean;
};
position: StringConstructor;
destroyOnHide: {
type: BooleanConstructor;
default: boolean;
};
}, unknown, {
activeId: string | number | null | undefined;
defaultSlots: never[];
contentHeight: number;
isTransitioning: boolean;
}, {
activeItem(): IStepItem | null | undefined;
items(): IStepItem[];
}, {
childClick(child: TabbedChild): void;
getNextItemIdx(fromIdx: number, skipDisabled?: boolean): number | null;
getPrevItemIdx(fromIdx: number, skipDisabled?: boolean): number | null;
}, ProviderParentMixin<3, IStepItem>, ComponentOptionsMixin, {
'update:modelValue': (_value: string | number | null | undefined) => true;
}, string, PublicProps, Readonly<ExtractPropTypes<    {
modelValue: {
type: PropType<string | number | null | undefined>;
default: undefined;
};
size: StringConstructor;
animated: {
type: BooleanConstructor;
default: boolean;
};
animation: StringConstructor;
animateInitially: BooleanConstructor;
vertical: {
type: BooleanConstructor;
default: boolean;
};
position: StringConstructor;
destroyOnHide: {
type: BooleanConstructor;
default: boolean;
};
}>> & {
"onUpdate:modelValue"?: ((_value: string | number | null | undefined) => any) | undefined;
}, {
modelValue: string | number | null | undefined;
destroyOnHide: boolean;
animated: boolean;
animateInitially: boolean;
vertical: boolean;
}, {}>, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {
type: PropType<VueClassAttribute>;
iconPack: StringConstructor;
iconPrev: {
type: StringConstructor;
default: () => string;
};
iconNext: {
type: StringConstructor;
default: () => string;
};
hasNavigation: {
type: BooleanConstructor;
default: boolean;
};
labelPosition: {
type: PropType<LabelPosition>;
validator(value: LabelPosition): boolean;
default: string;
};
rounded: {
type: BooleanConstructor;
default: boolean;
};
mobileMode: {
type: PropType<MobileMode>;
validator(value: MobileMode): boolean;
default: string;
};
ariaNextLabel: StringConstructor;
ariaPreviousLabel: StringConstructor;
}>>, {
rounded: boolean;
labelPosition: "left" | "bottom" | "right";
iconPrev: string;
iconNext: string;
hasNavigation: boolean;
mobileMode: "compact" | "minimalist";
}, {}>;

export declare const BSwitch: DefineComponent<    {
modelValue: (ArrayConstructor | NumberConstructor | StringConstructor | DateConstructor | ObjectConstructor | BooleanConstructor | FunctionConstructor)[];
nativeValue: (ArrayConstructor | NumberConstructor | StringConstructor | DateConstructor | ObjectConstructor | BooleanConstructor | FunctionConstructor)[];
disabled: BooleanConstructor;
type: PropType<string | null>;
passiveType: PropType<string | null>;
name: StringConstructor;
required: BooleanConstructor;
size: StringConstructor;
ariaLabelledby: StringConstructor;
trueValue: {
type: (ArrayConstructor | NumberConstructor | StringConstructor | DateConstructor | ObjectConstructor | BooleanConstructor | FunctionConstructor)[];
default: boolean;
};
falseValue: {
type: (ArrayConstructor | NumberConstructor | StringConstructor | DateConstructor | ObjectConstructor | BooleanConstructor | FunctionConstructor)[];
default: boolean;
};
rounded: {
type: BooleanConstructor;
default: () => boolean;
};
outlined: {
type: BooleanConstructor;
default: boolean;
};
leftLabel: {
type: BooleanConstructor;
default: boolean;
};
}, unknown, {
newValue: string | number | boolean | Function | unknown[] | Date | Record<string, any> | undefined;
isMouseDown: boolean;
}, {
computedValue: {
get(): string | number | boolean | Function | unknown[] | Record<string, any> | {
toString: () => string;
toDateString: () => string;
toTimeString: () => string;
toLocaleString: {
(): string;
(locales?: string | string[], options?: Intl.DateTimeFormatOptions): string;
(locales?: Intl.LocalesArgument, options?: Intl.DateTimeFormatOptions): string;
};
toLocaleDateString: {
(): string;
(locales?: string | string[], options?: Intl.DateTimeFormatOptions): string;
(locales?: Intl.LocalesArgument, options?: Intl.DateTimeFormatOptions): string;
};
toLocaleTimeString: {
(): string;
(locales?: string | string[], options?: Intl.DateTimeFormatOptions): string;
(locales?: Intl.LocalesArgument, options?: Intl.DateTimeFormatOptions): string;
};
valueOf: () => number;
getTime: () => number;
getFullYear: () => number;
getUTCFullYear: () => number;
getMonth: () => number;
getUTCMonth: () => number;
getDate: () => number;
getUTCDate: () => number;
getDay: () => number;
getUTCDay: () => number;
getHours: () => number;
getUTCHours: () => number;
getMinutes: () => number;
getUTCMinutes: () => number;
getSeconds: () => number;
getUTCSeconds: () => number;
getMilliseconds: () => number;
getUTCMilliseconds: () => number;
getTimezoneOffset: () => number;
setTime: (time: number) => number;
setMilliseconds: (ms: number) => number;
setUTCMilliseconds: (ms: number) => number;
setSeconds: (sec: number, ms?: number) => number;
setUTCSeconds: (sec: number, ms?: number) => number;
setMinutes: (min: number, sec?: number, ms?: number) => number;
setUTCMinutes: (min: number, sec?: number, ms?: number) => number;
setHours: (hours: number, min?: number, sec?: number, ms?: number) => number;
setUTCHours: (hours: number, min?: number, sec?: number, ms?: number) => number;
setDate: (date: number) => number;
setUTCDate: (date: number) => number;
setMonth: (month: number, date?: number) => number;
setUTCMonth: (month: number, date?: number) => number;
setFullYear: (year: number, month?: number, date?: number) => number;
setUTCFullYear: (year: number, month?: number, date?: number) => number;
toUTCString: () => string;
toISOString: () => string;
toJSON: (key?: any) => string;
[Symbol.toPrimitive]: {
(hint: "default"): string;
(hint: "string"): string;
(hint: "number"): number;
(hint: string): string | number;
};
} | undefined;
set(value: any): void;
};
newClass(): (string | {
'is-disabled': boolean;
'is-rounded': boolean;
'is-outlined': boolean;
'has-left-label': boolean;
} | undefined)[];
checkClasses(): (string | {
'is-elastic': boolean;
} | null | undefined)[];
showControlLabel(): boolean;
disabledOrUndefined(): true | undefined;
}, {
focus(): void;
}, ComponentOptionsMixin, ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", PublicProps, Readonly<ExtractPropTypes<    {
modelValue: (ArrayConstructor | NumberConstructor | StringConstructor | DateConstructor | ObjectConstructor | BooleanConstructor | FunctionConstructor)[];
nativeValue: (ArrayConstructor | NumberConstructor | StringConstructor | DateConstructor | ObjectConstructor | BooleanConstructor | FunctionConstructor)[];
disabled: BooleanConstructor;
type: PropType<string | null>;
passiveType: PropType<string | null>;
name: StringConstructor;
required: BooleanConstructor;
size: StringConstructor;
ariaLabelledby: StringConstructor;
trueValue: {
type: (ArrayConstructor | NumberConstructor | StringConstructor | DateConstructor | ObjectConstructor | BooleanConstructor | FunctionConstructor)[];
default: boolean;
};
falseValue: {
type: (ArrayConstructor | NumberConstructor | StringConstructor | DateConstructor | ObjectConstructor | BooleanConstructor | FunctionConstructor)[];
default: boolean;
};
rounded: {
type: BooleanConstructor;
default: () => boolean;
};
outlined: {
type: BooleanConstructor;
default: boolean;
};
leftLabel: {
type: BooleanConstructor;
default: boolean;
};
}>> & {
"onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
required: boolean;
rounded: boolean;
outlined: boolean;
disabled: boolean;
trueValue: string | number | boolean | Function | unknown[] | Date | Record<string, any>;
falseValue: string | number | boolean | Function | unknown[] | Date | Record<string, any>;
leftLabel: boolean;
}, {}>;

export declare const BTabItem: DefineComponent<    {
disabled: BooleanConstructor;
}, unknown, {
elementClass: string;
elementRole: string;
}, {}, {}, DefineComponent<    {
label: StringConstructor;
icon: StringConstructor;
iconPack: StringConstructor;
visible: {
type: BooleanConstructor;
default: boolean;
};
headerClass: {
type: PropType<VueClassAttribute>;
default: null;
};
}, unknown, {
transitionName: TransitionName | null;
elementClass: string;
elementRole: string | null;
}, {
isActive(): boolean;
}, {
activate(oldIndex: number): void;
deactivate(newIndex: number): void;
}, InjectedChildMixin<1, TabbedParent>, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {
label: StringConstructor;
icon: StringConstructor;
iconPack: StringConstructor;
visible: {
type: BooleanConstructor;
default: boolean;
};
headerClass: {
type: PropType<VueClassAttribute>;
default: null;
};
}>>, {
visible: boolean;
headerClass: VueClassAttribute;
}, {}>, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {
disabled: BooleanConstructor;
}>>, {
disabled: boolean;
}, {}>;

export declare const BTable: DefineComponent<    {
data: {
type: PropType<TableRow[]>;
default: () => never[];
};
columns: {
type: PropType<TableColumnProps[]>;
default: () => never[];
};
bordered: BooleanConstructor;
striped: BooleanConstructor;
narrowed: BooleanConstructor;
hoverable: BooleanConstructor;
loading: BooleanConstructor;
detailed: BooleanConstructor;
checkable: BooleanConstructor;
headerCheckable: {
type: BooleanConstructor;
default: boolean;
};
checkboxType: {
type: StringConstructor;
default: string;
};
checkboxPosition: {
type: StringConstructor;
default: string;
validator: (value: unknown) => boolean;
};
stickyCheckbox: {
type: BooleanConstructor;
default: boolean;
};
selected: PropType<TableRow>;
isRowSelectable: {
type: FunctionConstructor;
default: () => true;
};
focusable: BooleanConstructor;
customIsChecked: PropType<(a: TableRow, b: TableRow) => boolean>;
isRowCheckable: {
type: PropType<(row: TableRow) => boolean>;
default: () => true;
};
checkedRows: {
type: {
(arrayLength: number): any[];
(...items: any[]): any[];
new (arrayLength: number): any[];
new (...items: any[]): any[];
isArray(arg: any): arg is any[];
readonly prototype: any[];
from<T>(arrayLike: ArrayLike<T>): T[];
from<T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
from<T>(iterable: Iterable<T> | ArrayLike<T>): T[];
from<T, U>(iterable: Iterable<T> | ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
of<T>(...items: T[]): T[];
readonly [Symbol.species]: ArrayConstructor;
};
default: () => never[];
};
mobileCards: {
type: BooleanConstructor;
default: boolean;
};
defaultSort: (StringConstructor | {
(arrayLength: number): string[];
(...items: string[]): string[];
new (arrayLength: number): string[];
new (...items: string[]): string[];
isArray(arg: any): arg is any[];
readonly prototype: any[];
from<T>(arrayLike: ArrayLike<T>): T[];
from<T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
from<T>(iterable: Iterable<T> | ArrayLike<T>): T[];
from<T, U>(iterable: Iterable<T> | ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
of<T>(...items: T[]): T[];
readonly [Symbol.species]: ArrayConstructor;
})[];
defaultSortDirection: {
type: StringConstructor;
default: string;
};
sortIcon: {
type: StringConstructor;
default: string;
};
sortIconSize: {
type: StringConstructor;
default: string;
};
sortMultiple: {
type: BooleanConstructor;
default: boolean;
};
sortMultipleData: {
type: PropType<TableColumnOrder[]>;
default: () => never[];
};
sortMultipleKey: {
type: PropType<keyof ModifierKeys | null>;
default: null;
};
paginated: BooleanConstructor;
currentPage: {
type: NumberConstructor;
default: number;
};
perPage: {
type: (NumberConstructor | StringConstructor)[];
default: number;
};
showDetailIcon: {
type: BooleanConstructor;
default: boolean;
};
detailIcon: {
type: StringConstructor;
default: string;
};
paginationPosition: {
type: StringConstructor;
default: string;
validator: (value: unknown) => boolean;
};
paginationRounded: BooleanConstructor;
backendSorting: BooleanConstructor;
backendFiltering: BooleanConstructor;
rowClass: {
type: PropType<(row: TableRow, index: number) => VueClassAttribute>;
default: () => "";
};
openedDetailed: {
type: {
(arrayLength: number): any[];
(...items: any[]): any[];
new (arrayLength: number): any[];
new (...items: any[]): any[];
isArray(arg: any): arg is any[];
readonly prototype: any[];
from<T>(arrayLike: ArrayLike<T>): T[];
from<T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
from<T>(iterable: Iterable<T> | ArrayLike<T>): T[];
from<T, U>(iterable: Iterable<T> | ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
of<T>(...items: T[]): T[];
readonly [Symbol.species]: ArrayConstructor;
};
default: () => never[];
};
hasDetailedVisible: {
type: PropType<(row: TableRow) => boolean>;
default: () => true;
};
detailKey: {
type: StringConstructor;
default: string;
};
detailTransition: {
type: StringConstructor;
default: string;
};
customDetailRow: {
type: BooleanConstructor;
default: boolean;
};
backendPagination: BooleanConstructor;
total: {
type: (NumberConstructor | StringConstructor)[];
default: number;
};
iconPack: StringConstructor;
mobileSortPlaceholder: StringConstructor;
customRowKey: StringConstructor;
draggable: {
type: BooleanConstructor;
default: boolean;
};
draggableColumn: {
type: BooleanConstructor;
default: boolean;
};
scrollable: BooleanConstructor;
ariaNextLabel: StringConstructor;
ariaPreviousLabel: StringConstructor;
ariaPageLabel: StringConstructor;
ariaCurrentLabel: StringConstructor;
stickyHeader: BooleanConstructor;
height: (NumberConstructor | StringConstructor)[];
filtersEvent: {
type: StringConstructor;
default: string;
};
cardLayout: BooleanConstructor;
showHeader: {
type: BooleanConstructor;
default: boolean;
};
debounceSearch: NumberConstructor;
caption: StringConstructor;
showCaption: {
type: BooleanConstructor;
default: boolean;
};
pageInput: {
type: BooleanConstructor;
default: boolean;
};
paginationOrder: StringConstructor;
pageInputPosition: StringConstructor;
debouncePageInput: (NumberConstructor | StringConstructor)[];
}, unknown, {
sortMultipleDataLocal: TableColumnOrder[];
getValueByPath: typeof getValueByPath;
visibleDetailRows: any[];
newData: any[];
newDataTotal: string | number;
newCheckedRows: any[];
lastCheckedRowIndex: number | null;
newCurrentPage: number;
currentSortColumn: ITableColumn;
isAsc: boolean;
filters: Record<string, string | number>;
defaultSlots: ITableColumn[];
firstTimeSort: boolean;
isDraggingRow: boolean;
isDraggingColumn: boolean;
debouncedHandleFiltersChange: FiltersChangeHandler | undefined;
_selectedRow: null;
mayBeTouchDragging: boolean;
touchDragoverTarget: Element | null;
_draggedCellEl: Element | undefined;
draggedCellContent: string;
}, {
sortMultipleDataComputed(): TableColumnOrder[];
tableClasses(): {
'is-bordered': boolean;
'is-striped': boolean;
'is-narrow': boolean;
'is-hoverable': number | false;
};
tableWrapperClasses(): {
'has-mobile-cards': boolean;
'has-sticky-header': boolean;
'is-card-list': boolean;
'table-container': boolean;
};
tableStyle(): {
height: string;
};
touchDraggedCellClasses(): {
'has-mobile-cards': boolean;
};
visibleData(): any[];
visibleColumns(): ({
thAttrs: (column: ITableColumn) => Record<string, any> | null;
tdAttrs: (row: TableRow, column: ITableColumn) => Record<string, any> | null;
newKey?: string | number | undefined;
_isTableColumn?: boolean | undefined;
thClasses?: string | Record<string, boolean | undefined> | (string | Record<string, boolean | undefined> | null | undefined)[] | null | undefined;
thStyle?: StyleValueUnit | StyleValueUnit[];
thWrapStyle?: StyleValueUnit | StyleValueUnit[];
style?: StyleValueUnit;
getRootClasses: (row: TableRow) => VueClassAttribute[];
getRootStyle: (row: TableRow) => StyleValue_2;
$slots: Slots;
label?: string | undefined;
meta?: any;
customSort?: ((a: Record<string, any>, b: Record<string, any>, isAscending: boolean) => number) | undefined;
numeric?: boolean | undefined;
field?: string | undefined;
width?: string | number | undefined;
visible?: boolean | undefined;
centered?: boolean | undefined;
headerClass?: string | undefined;
customKey?: string | number | undefined;
searchable?: boolean | undefined;
sortable?: boolean | undefined;
subheading?: string | number | undefined;
customSearch?: CustomSearchFunction | undefined;
sticky?: boolean | undefined;
headerSelectable?: boolean | undefined;
cellClass?: string | undefined;
} | {
newKey: string | number | undefined;
_isTableColumn: boolean;
thClasses: VueClassAttribute;
thStyle: StyleValue_2;
thWrapStyle: StyleValue_2;
style: StyleValueUnit;
getRootClasses(row: TableRow): VueClassAttribute[];
getRootStyle(row: TableRow): any[];
$slots: Slots;
rootClasses: VueClassAttribute;
isHeaderUnSelectable: boolean;
label: string;
customKey: string | number;
field: string;
meta: any;
width: string | number;
numeric: boolean;
centered: boolean;
searchable: boolean;
sortable: boolean;
visible: boolean;
subheading: string | number;
customSort: CustomSortFunction;
customSearch: CustomSearchFunction;
sticky: boolean;
headerSelectable: boolean;
headerClass: string;
cellClass?: string;
thAttrs: (column: ITableColumn) => Record<string, any> | null;
tdAttrs: (row: TableRow, column: ITableColumn) => Record<string, any> | null;
})[];
isAllChecked(): boolean;
isAllUncheckable(): boolean;
hasSortablenewColumns(): boolean;
hasSearchablenewColumns(): boolean;
hasCustomSubheadings(): boolean;
columnCount(): number;
showDetailRowIcon(): boolean;
isScrollable(): boolean;
newColumns(): {
newKey: string | number | undefined;
_isTableColumn: boolean;
thClasses: VueClassAttribute;
thStyle: StyleValue_2;
thWrapStyle: StyleValue_2;
style: StyleValueUnit;
getRootClasses(row: TableRow): VueClassAttribute[];
getRootStyle(row: TableRow): any[];
$slots: Slots;
rootClasses: VueClassAttribute;
isHeaderUnSelectable: boolean;
label: string;
customKey: string | number;
field: string;
meta: any;
width: string | number;
numeric: boolean;
centered: boolean;
searchable: boolean;
sortable: boolean;
visible: boolean;
subheading: string | number;
customSort: CustomSortFunction;
customSearch: CustomSearchFunction;
sticky: boolean;
headerSelectable: boolean;
headerClass: string;
cellClass?: string;
thAttrs: (column: ITableColumn) => Record<string, any> | null;
tdAttrs: (row: TableRow, column: ITableColumn) => Record<string, any> | null;
}[] | {
thAttrs: (column: ITableColumn) => Record<string, any> | null;
tdAttrs: (row: TableRow, column: ITableColumn) => Record<string, any> | null;
newKey?: string | number | undefined;
_isTableColumn?: boolean | undefined;
thClasses?: string | Record<string, boolean | undefined> | (string | Record<string, boolean | undefined> | null | undefined)[] | null | undefined;
thStyle?: StyleValueUnit | StyleValueUnit[];
thWrapStyle?: StyleValueUnit | StyleValueUnit[];
style?: StyleValueUnit;
getRootClasses: (row: TableRow) => VueClassAttribute[];
getRootStyle: (row: TableRow) => StyleValue_2;
$slots: Slots;
label?: string | undefined;
meta?: any;
customSort?: ((a: Record<string, any>, b: Record<string, any>, isAscending: boolean) => number) | undefined;
numeric?: boolean | undefined;
field?: string | undefined;
width?: string | number | undefined;
visible?: boolean | undefined;
centered?: boolean | undefined;
headerClass?: string | undefined;
customKey?: string | number | undefined;
searchable?: boolean | undefined;
sortable?: boolean | undefined;
subheading?: string | number | undefined;
customSearch?: CustomSearchFunction | undefined;
sticky?: boolean | undefined;
headerSelectable?: boolean | undefined;
cellClass?: string | undefined;
}[];
canDragRow(): boolean;
canDragColumn(): boolean;
}, {
onFiltersEvent(event: Event): void;
handleFiltersChange(value: Record<string, string | number>): void;
findIndexOfSortData(column: ITableColumn): number;
removeSortingPriority(column: ITableColumn): void;
resetMultiSorting(): void;
sortBy(array: TableRow[], key: string | undefined, fn: CustomSortFunction | undefined, isAsc: boolean): any[];
sortMultiColumn(column: ITableColumn | TableColumnOrder): void;
doSortMultiColumn(): void;
sort(column: ITableColumn | null | undefined, updatingData?: boolean | null, event?: ModifierKeys | null): void;
doSortSingleColumn(column: ITableColumn): void;
isRowSelected(row: TableRow, selected: TableRow | undefined): boolean;
isRowChecked(row: TableRow): boolean;
removeCheckedRow(row: TableRow): void;
checkAll(): void;
checkRow(row: TableRow, index: number, event: ModifierKeys): void;
shiftCheckRow(row: TableRow, index: number, lastCheckedRowIndex: number): void;
selectRow(row: TableRow): void;
toggleDetails(obj: TableRow): void;
openDetailRow(obj: TableRow): void;
closeDetailRow(obj: TableRow): void;
isVisibleDetailRow(obj: TableRow): boolean;
isActiveDetailRow(row: TableRow): boolean;
isActiveCustomDetailRow(row: TableRow): boolean;
isRowFiltered(row: TableRow): boolean;
handleDetailKey(index: TableRow): any;
checkPredefinedDetailedRows(): void;
checkSort(): void;
hasCustomFooterSlot(): boolean;
hasBottomLeftSlot(): boolean;
pressedArrow(pos: number): void;
focus(): void;
initSort(): void;
handleDragStart(event: DragEvent, row: TableRow, index: number): void;
handleDragEnd(event: DragEvent, row: TableRow, index: number): void;
handleDrop(event: DragEvent, row: TableRow, index: number): void;
handleDragOver(event: DragEvent, row: TableRow, index: number): void;
handleDragLeave(event: DragEvent, row: TableRow, index: number): void;
emitEventForRow(eventName: string, event: Event, row: TableRow): void | null;
handleColumnDragStart(event: DragEvent, column: ITableColumn, index: number): void;
handleColumnDragEnd(event: DragEvent, column: ITableColumn, index: number): void;
handleColumnDrop(event: DragEvent, column: ITableColumn, index: number): void;
handleColumnDragOver(event: DragEvent, column: ITableColumn, index: number): void;
handleColumnDragLeave(event: DragEvent, column: ITableColumn, index: number): void;
handleTouchStart(event: TouchEvent, row: TableRow): void;
handleTouchMove(event: TouchEvent): void;
handleTouchEnd(event: TouchEvent): void;
handleColumnTouchStart(event: TouchEvent): void;
handleColumnTouchMove(event: TouchEvent): void;
handleColumnTouchEnd(event: TouchEvent): void;
updateDraggedCell({ clientX, clientY }: {
clientX: number;
clientY: number;
}): void;
_registerTableColumn(column: ITableColumn): void;
_unregisterTableColumn(column: ITableColumn): void;
}, DefineComponent<    {
compatFallthrough: {
type: BooleanConstructor;
default: () => boolean;
};
}, unknown, unknown, {
rootAttrs(): {
class: unknown;
style: StyleValue;
id: string | undefined;
} | {
class?: undefined;
style?: undefined;
id?: undefined;
};
fallthroughAttrs(): {
[x: string]: unknown;
};
}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {
compatFallthrough: {
type: BooleanConstructor;
default: () => boolean;
};
}>>, {
compatFallthrough: boolean;
}, {}>, ComponentOptionsMixin, {
cellclick: (_row: TableRow, _column: ITableColumn, _rowIndex: number, _colIndex: number) => true;
check: (_checkedRows: TableRow[], _row?: TableRow) => true;
'check-all': (_rows: TableRow[]) => true;
click: (_row: TableRow) => true;
columndragend: (_event: TableColumnDragEvent) => true;
columndragleave: (_event: TableColumnDragEvent) => true;
columndragover: (_event: TableColumnDragEvent) => true;
columndragstart: (_event: TableColumnDragEvent) => true;
columndrop: (_event: TableColumnDragEvent) => true;
contextmenu: (_row: TableRow, _event: MouseEvent) => true;
dblclick: (_row: TableRow) => true;
'details-close': (_row: TableRow) => true;
'details-open': (_row: TableRow) => true;
dragend: (_event: TableRowDragEvent) => true;
dragleave: (_event: TableRowDragEvent) => true;
dragover: (_event: TableRowDragEvent) => true;
dragstart: (_event: TableRowDragEvent) => true;
drop: (_event: TableRowDragEvent) => true;
'filters-change': (_value: Record<string, string | number>) => true;
'page-change': (_page: string | number) => true;
select: (_new: TableRow, _old: TableRow) => true;
sort: (_field: string | undefined, _order: "asc" | "desc", _event: ModifierKeys | null) => true;
'sorting-priority-removed': (_field: string | undefined) => true;
'update:checkedRows': (_rows: TableRow[]) => true;
'update:currentPage': (_page: string | number) => true;
'update:openedDetailed': (_rows: TableRow[]) => true;
'update:selected': (_row: TableRow) => true;
}, string, PublicProps, Readonly<ExtractPropTypes<    {
data: {
type: PropType<TableRow[]>;
default: () => never[];
};
columns: {
type: PropType<TableColumnProps[]>;
default: () => never[];
};
bordered: BooleanConstructor;
striped: BooleanConstructor;
narrowed: BooleanConstructor;
hoverable: BooleanConstructor;
loading: BooleanConstructor;
detailed: BooleanConstructor;
checkable: BooleanConstructor;
headerCheckable: {
type: BooleanConstructor;
default: boolean;
};
checkboxType: {
type: StringConstructor;
default: string;
};
checkboxPosition: {
type: StringConstructor;
default: string;
validator: (value: unknown) => boolean;
};
stickyCheckbox: {
type: BooleanConstructor;
default: boolean;
};
selected: PropType<TableRow>;
isRowSelectable: {
type: FunctionConstructor;
default: () => true;
};
focusable: BooleanConstructor;
customIsChecked: PropType<(a: TableRow, b: TableRow) => boolean>;
isRowCheckable: {
type: PropType<(row: TableRow) => boolean>;
default: () => true;
};
checkedRows: {
type: {
(arrayLength: number): any[];
(...items: any[]): any[];
new (arrayLength: number): any[];
new (...items: any[]): any[];
isArray(arg: any): arg is any[];
readonly prototype: any[];
from<T>(arrayLike: ArrayLike<T>): T[];
from<T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
from<T>(iterable: Iterable<T> | ArrayLike<T>): T[];
from<T, U>(iterable: Iterable<T> | ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
of<T>(...items: T[]): T[];
readonly [Symbol.species]: ArrayConstructor;
};
default: () => never[];
};
mobileCards: {
type: BooleanConstructor;
default: boolean;
};
defaultSort: (StringConstructor | {
(arrayLength: number): string[];
(...items: string[]): string[];
new (arrayLength: number): string[];
new (...items: string[]): string[];
isArray(arg: any): arg is any[];
readonly prototype: any[];
from<T>(arrayLike: ArrayLike<T>): T[];
from<T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
from<T>(iterable: Iterable<T> | ArrayLike<T>): T[];
from<T, U>(iterable: Iterable<T> | ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
of<T>(...items: T[]): T[];
readonly [Symbol.species]: ArrayConstructor;
})[];
defaultSortDirection: {
type: StringConstructor;
default: string;
};
sortIcon: {
type: StringConstructor;
default: string;
};
sortIconSize: {
type: StringConstructor;
default: string;
};
sortMultiple: {
type: BooleanConstructor;
default: boolean;
};
sortMultipleData: {
type: PropType<TableColumnOrder[]>;
default: () => never[];
};
sortMultipleKey: {
type: PropType<keyof ModifierKeys | null>;
default: null;
};
paginated: BooleanConstructor;
currentPage: {
type: NumberConstructor;
default: number;
};
perPage: {
type: (NumberConstructor | StringConstructor)[];
default: number;
};
showDetailIcon: {
type: BooleanConstructor;
default: boolean;
};
detailIcon: {
type: StringConstructor;
default: string;
};
paginationPosition: {
type: StringConstructor;
default: string;
validator: (value: unknown) => boolean;
};
paginationRounded: BooleanConstructor;
backendSorting: BooleanConstructor;
backendFiltering: BooleanConstructor;
rowClass: {
type: PropType<(row: TableRow, index: number) => VueClassAttribute>;
default: () => "";
};
openedDetailed: {
type: {
(arrayLength: number): any[];
(...items: any[]): any[];
new (arrayLength: number): any[];
new (...items: any[]): any[];
isArray(arg: any): arg is any[];
readonly prototype: any[];
from<T>(arrayLike: ArrayLike<T>): T[];
from<T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
from<T>(iterable: Iterable<T> | ArrayLike<T>): T[];
from<T, U>(iterable: Iterable<T> | ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
of<T>(...items: T[]): T[];
readonly [Symbol.species]: ArrayConstructor;
};
default: () => never[];
};
hasDetailedVisible: {
type: PropType<(row: TableRow) => boolean>;
default: () => true;
};
detailKey: {
type: StringConstructor;
default: string;
};
detailTransition: {
type: StringConstructor;
default: string;
};
customDetailRow: {
type: BooleanConstructor;
default: boolean;
};
backendPagination: BooleanConstructor;
total: {
type: (NumberConstructor | StringConstructor)[];
default: number;
};
iconPack: StringConstructor;
mobileSortPlaceholder: StringConstructor;
customRowKey: StringConstructor;
draggable: {
type: BooleanConstructor;
default: boolean;
};
draggableColumn: {
type: BooleanConstructor;
default: boolean;
};
scrollable: BooleanConstructor;
ariaNextLabel: StringConstructor;
ariaPreviousLabel: StringConstructor;
ariaPageLabel: StringConstructor;
ariaCurrentLabel: StringConstructor;
stickyHeader: BooleanConstructor;
height: (NumberConstructor | StringConstructor)[];
filtersEvent: {
type: StringConstructor;
default: string;
};
cardLayout: BooleanConstructor;
showHeader: {
type: BooleanConstructor;
default: boolean;
};
debounceSearch: NumberConstructor;
caption: StringConstructor;
showCaption: {
type: BooleanConstructor;
default: boolean;
};
pageInput: {
type: BooleanConstructor;
default: boolean;
};
paginationOrder: StringConstructor;
pageInputPosition: StringConstructor;
debouncePageInput: (NumberConstructor | StringConstructor)[];
}>> & {
onDragend?: ((_event: TableRowDragEvent) => any) | undefined;
onDragleave?: ((_event: TableRowDragEvent) => any) | undefined;
onDragover?: ((_event: TableRowDragEvent) => any) | undefined;
onDragstart?: ((_event: TableRowDragEvent) => any) | undefined;
onDrop?: ((_event: TableRowDragEvent) => any) | undefined;
onClick?: ((_row: any) => any) | undefined;
onContextmenu?: ((_row: any, _event: MouseEvent) => any) | undefined;
onDblclick?: ((_row: any) => any) | undefined;
onSelect?: ((_new: any, _old: any) => any) | undefined;
onSort?: ((_field: string | undefined, _order: "desc" | "asc", _event: ModifierKeys | null) => any) | undefined;
"onPage-change"?: ((_page: string | number) => any) | undefined;
"onUpdate:currentPage"?: ((_page: string | number) => any) | undefined;
onCheck?: ((_checkedRows: any[], _row?: any) => any) | undefined;
onCellclick?: ((_row: any, _column: ITableColumn, _rowIndex: number, _colIndex: number) => any) | undefined;
"onCheck-all"?: ((_rows: any[]) => any) | undefined;
onColumndragend?: ((_event: TableColumnDragEvent) => any) | undefined;
onColumndragleave?: ((_event: TableColumnDragEvent) => any) | undefined;
onColumndragover?: ((_event: TableColumnDragEvent) => any) | undefined;
onColumndragstart?: ((_event: TableColumnDragEvent) => any) | undefined;
onColumndrop?: ((_event: TableColumnDragEvent) => any) | undefined;
"onDetails-close"?: ((_row: any) => any) | undefined;
"onDetails-open"?: ((_row: any) => any) | undefined;
"onFilters-change"?: ((_value: Record<string, string | number>) => any) | undefined;
"onSorting-priority-removed"?: ((_field: string | undefined) => any) | undefined;
"onUpdate:checkedRows"?: ((_rows: any[]) => any) | undefined;
"onUpdate:openedDetailed"?: ((_rows: any[]) => any) | undefined;
"onUpdate:selected"?: ((_row: any) => any) | undefined;
}, {
data: any[];
loading: boolean;
total: string | number;
scrollable: boolean;
hoverable: boolean;
focusable: boolean;
perPage: string | number;
pageInput: boolean;
columns: TableColumnProps[];
sortMultipleData: TableColumnOrder[];
sortIcon: string;
sortIconSize: string;
sortMultiple: boolean;
currentPage: number;
paginated: boolean;
checkedRows: any[];
openedDetailed: any[];
bordered: boolean;
striped: boolean;
narrowed: boolean;
detailed: boolean;
checkable: boolean;
headerCheckable: boolean;
checkboxType: string;
checkboxPosition: string;
stickyCheckbox: boolean;
isRowSelectable: Function;
isRowCheckable: (row: TableRow) => boolean;
mobileCards: boolean;
defaultSortDirection: string;
sortMultipleKey: keyof ModifierKeys | null;
showDetailIcon: boolean;
detailIcon: string;
paginationPosition: string;
paginationRounded: boolean;
backendSorting: boolean;
backendFiltering: boolean;
rowClass: (row: TableRow, index: number) => VueClassAttribute;
hasDetailedVisible: (row: TableRow) => boolean;
detailKey: string;
detailTransition: string;
customDetailRow: boolean;
backendPagination: boolean;
draggable: boolean;
draggableColumn: boolean;
stickyHeader: boolean;
filtersEvent: string;
cardLayout: boolean;
showHeader: boolean;
showCaption: boolean;
}, {}>;

export declare const BTableColumn: DefineComponent<    {
label: StringConstructor;
customKey: (NumberConstructor | StringConstructor)[];
field: StringConstructor;
meta: (ArrayConstructor | NumberConstructor | StringConstructor | ObjectConstructor | BooleanConstructor | FunctionConstructor)[];
width: (NumberConstructor | StringConstructor)[];
numeric: BooleanConstructor;
centered: BooleanConstructor;
searchable: BooleanConstructor;
sortable: BooleanConstructor;
visible: {
type: BooleanConstructor;
default: boolean;
};
subheading: (NumberConstructor | StringConstructor)[];
customSort: PropType<CustomSortFunction>;
customSearch: PropType<CustomSearchFunction>;
sticky: BooleanConstructor;
headerSelectable: BooleanConstructor;
headerClass: StringConstructor;
cellClass: StringConstructor;
thAttrs: {
type: PropType<ITableColumn["thAttrs"]>;
default: () => {};
};
tdAttrs: {
type: PropType<ITableColumn["tdAttrs"]>;
default: () => {};
};
}, unknown, {
newKey: string | number | undefined;
_isTableColumn: boolean;
}, {
thClasses(): (string | {
'is-sortable': boolean;
'is-sticky': boolean;
'is-unselectable': boolean;
} | undefined)[];
thStyle(): {
width: string | undefined;
}[];
thWrapStyle(): {
width: string;
} | {
width?: undefined;
};
rootClasses(): (string | {
'has-text-right': boolean;
'has-text-centered': boolean;
'is-sticky': boolean;
} | undefined)[];
style(): {
width: string | undefined;
};
hasDefaultSlot(): boolean;
isHeaderUnSelectable(): boolean;
}, {
getRootClasses(row: TableRow): (string | {
'has-text-right': boolean;
'has-text-centered': boolean;
'is-sticky': boolean;
} | undefined)[][];
getRootStyle(row: TableRow): any[];
}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {
label: StringConstructor;
customKey: (NumberConstructor | StringConstructor)[];
field: StringConstructor;
meta: (ArrayConstructor | NumberConstructor | StringConstructor | ObjectConstructor | BooleanConstructor | FunctionConstructor)[];
width: (NumberConstructor | StringConstructor)[];
numeric: BooleanConstructor;
centered: BooleanConstructor;
searchable: BooleanConstructor;
sortable: BooleanConstructor;
visible: {
type: BooleanConstructor;
default: boolean;
};
subheading: (NumberConstructor | StringConstructor)[];
customSort: PropType<CustomSortFunction>;
customSearch: PropType<CustomSearchFunction>;
sticky: BooleanConstructor;
headerSelectable: BooleanConstructor;
headerClass: StringConstructor;
cellClass: StringConstructor;
thAttrs: {
type: PropType<ITableColumn["thAttrs"]>;
default: () => {};
};
tdAttrs: {
type: PropType<ITableColumn["tdAttrs"]>;
default: () => {};
};
}>>, {
numeric: boolean;
visible: boolean;
centered: boolean;
thAttrs: (column: ITableColumn) => Record<string, any> | null;
tdAttrs: (row: TableRow, column: ITableColumn) => Record<string, any> | null;
searchable: boolean;
sortable: boolean;
sticky: boolean;
headerSelectable: boolean;
}, {}>;

export declare const BTabs: DefineComponent<    {
expanded: {
type: BooleanConstructor;
default: () => boolean;
};
type: {
type: (StringConstructor | ObjectConstructor)[];
default: () => VueClassAttribute;
};
animated: {
type: BooleanConstructor;
default: () => boolean;
};
multiline: BooleanConstructor;
}, unknown, {
currentFocus: number | null;
}, {
mainClasses(): {
[x: string]: boolean | "" | undefined;
'is-fullwidth': boolean;
'is-vertical': boolean;
'is-multiline': boolean;
};
navClasses(): (string | Record<string, any> | undefined)[];
}, {
giveFocusToTab(tab: HTMLElement | ComponentPublicInstance | ComponentPublicInstance[]): void;
manageTablistKeydown(event: KeyboardEvent): void;
manageTabKeydown(event: KeyboardEvent, childItem: TabbedChild): void;
}, DefineComponent<    {
modelValue: {
type: PropType<string | number | null | undefined>;
default: undefined;
};
size: StringConstructor;
animated: {
type: BooleanConstructor;
default: boolean;
};
animation: StringConstructor;
animateInitially: BooleanConstructor;
vertical: {
type: BooleanConstructor;
default: boolean;
};
position: StringConstructor;
destroyOnHide: {
type: BooleanConstructor;
default: boolean;
};
}, unknown, {
activeId: string | number | null | undefined;
defaultSlots: never[];
contentHeight: number;
isTransitioning: boolean;
}, {
activeItem(): TabbedChild | null | undefined;
items(): TabbedChild[];
}, {
childClick(child: TabbedChild): void;
getNextItemIdx(fromIdx: number, skipDisabled?: boolean): number | null;
getPrevItemIdx(fromIdx: number, skipDisabled?: boolean): number | null;
}, ProviderParentMixin<3, TabbedChild>, ComponentOptionsMixin, {
'update:modelValue': (_value: string | number | null | undefined) => true;
}, string, PublicProps, Readonly<ExtractPropTypes<    {
modelValue: {
type: PropType<string | number | null | undefined>;
default: undefined;
};
size: StringConstructor;
animated: {
type: BooleanConstructor;
default: boolean;
};
animation: StringConstructor;
animateInitially: BooleanConstructor;
vertical: {
type: BooleanConstructor;
default: boolean;
};
position: StringConstructor;
destroyOnHide: {
type: BooleanConstructor;
default: boolean;
};
}>> & {
"onUpdate:modelValue"?: ((_value: string | number | null | undefined) => any) | undefined;
}, {
modelValue: string | number | null | undefined;
destroyOnHide: boolean;
animated: boolean;
animateInitially: boolean;
vertical: boolean;
}, {}>, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {
expanded: {
type: BooleanConstructor;
default: () => boolean;
};
type: {
type: (StringConstructor | ObjectConstructor)[];
default: () => VueClassAttribute;
};
animated: {
type: BooleanConstructor;
default: () => boolean;
};
multiline: BooleanConstructor;
}>>, {
type: string | Record<string, any>;
expanded: boolean;
animated: boolean;
multiline: boolean;
}, {}>;

export declare const BTag: DefineComponent<    {
attached: BooleanConstructor;
closable: BooleanConstructor;
type: (StringConstructor | ObjectConstructor)[];
size: StringConstructor;
rounded: BooleanConstructor;
disabled: BooleanConstructor;
ellipsis: BooleanConstructor;
tabstop: {
type: BooleanConstructor;
default: boolean;
};
ariaCloseLabel: StringConstructor;
icon: StringConstructor;
iconType: StringConstructor;
iconPack: StringConstructor;
closeType: StringConstructor;
closeIcon: StringConstructor;
closeIconPack: StringConstructor;
closeIconType: StringConstructor;
}, unknown, unknown, {
disabledOrUndefined(): true | undefined;
}, {
close(event: Event): void;
click(event: Event): void;
}, ComponentOptionsMixin, ComponentOptionsMixin, {
click: (_: Event) => true;
close: (_: Event) => true;
}, string, PublicProps, Readonly<ExtractPropTypes<    {
attached: BooleanConstructor;
closable: BooleanConstructor;
type: (StringConstructor | ObjectConstructor)[];
size: StringConstructor;
rounded: BooleanConstructor;
disabled: BooleanConstructor;
ellipsis: BooleanConstructor;
tabstop: {
type: BooleanConstructor;
default: boolean;
};
ariaCloseLabel: StringConstructor;
icon: StringConstructor;
iconType: StringConstructor;
iconPack: StringConstructor;
closeType: StringConstructor;
closeIcon: StringConstructor;
closeIconPack: StringConstructor;
closeIconType: StringConstructor;
}>> & {
onClick?: ((_: Event) => any) | undefined;
onClose?: ((_: Event) => any) | undefined;
}, {
rounded: boolean;
disabled: boolean;
closable: boolean;
attached: boolean;
ellipsis: boolean;
tabstop: boolean;
}, {}>;

export declare const BTaginput: DefineComponent<    {
modelValue: {
type: PropType<T[]>;
default: () => never[];
};
data: {
type: PropType<U[]>;
default: () => never[];
};
type: StringConstructor;
closeType: StringConstructor;
attached: {
type: BooleanConstructor;
default: boolean;
};
maxtags: NumberConstructor;
hasCounter: {
type: BooleanConstructor;
default: () => boolean;
};
field: {
type: StringConstructor;
default: string;
};
autocomplete: BooleanConstructor;
groupField: StringConstructor;
groupOptions: StringConstructor;
nativeAutocomplete: StringConstructor;
openOnFocus: BooleanConstructor;
keepOpen: {
type: BooleanConstructor;
default: boolean;
};
keepFirst: BooleanConstructor;
disabled: BooleanConstructor;
ellipsis: BooleanConstructor;
closable: {
type: BooleanConstructor;
default: boolean;
};
ariaCloseLabel: StringConstructor;
confirmKeys: {
type: PropType<string[]>;
default: () => string[];
};
removeOnKeys: {
type: PropType<string[]>;
default: () => string[];
};
allowNew: BooleanConstructor;
onPasteSeparators: {
type: PropType<string[]>;
default: () => string[];
};
beforeAdding: {
type: PropType<(tag: U) => boolean>;
default: () => boolean;
};
allowDuplicates: {
type: BooleanConstructor;
default: boolean;
};
checkInfiniteScroll: {
type: BooleanConstructor;
default: boolean;
};
createTag: {
type: PropType<(tag: U) => T>;
default: (tag: U) => any;
};
appendToBody: BooleanConstructor;
}, unknown, {
tags: any[];
newTag: string;
isComposing: boolean;
_elementRef: string;
_isTaginput: boolean;
requestID: ReturnType<typeof requestAnimationFrame> | null;
}, {
rootClasses(): {
'is-expanded': boolean;
};
containerClasses(): {
'is-focused': boolean;
'is-focusable': boolean;
};
valueLength(): number;
hasDefaultSlot(): boolean;
hasEmptySlot(): boolean;
hasHeaderSlot(): boolean;
hasFooterSlot(): boolean;
hasInput(): boolean;
tagsLength(): number;
separatorsAsRegExp(): RegExp | null;
disabledOrUndefined(): true | undefined;
}, {
addTag(tag?: U): void;
getNormalizedTagText(tag: T): string;
customOnBlur(event?: Event): void;
onSelect(option: U): void;
removeTag(index: number, event?: Event): any;
removeLastTag(): void;
keydown(event: KeyboardEvent): void;
onTyping(event: number | string | null | undefined): void;
emitInfiniteScroll(): void;
}, DefineComponent<    {
compatFallthrough: {
type: BooleanConstructor;
default: () => boolean;
};
}, unknown, unknown, {
rootAttrs(): {
class: unknown;
style: StyleValue;
id: string | undefined;
} | {
class?: undefined;
style?: undefined;
id?: undefined;
};
fallthroughAttrs(): {
[x: string]: unknown;
};
}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {
compatFallthrough: {
type: BooleanConstructor;
default: () => boolean;
};
}>>, {
compatFallthrough: boolean;
}, {}> | DefineComponent<    {
size: StringConstructor;
expanded: BooleanConstructor;
loading: BooleanConstructor;
rounded: BooleanConstructor;
icon: StringConstructor;
iconPack: StringConstructor;
maxlength: (NumberConstructor | StringConstructor)[];
useHtml5Validation: {
type: BooleanConstructor;
default: () => boolean;
};
validationMessage: StringConstructor;
locale: {
type: (StringConstructor | {
(arrayLength: number): string[];
(...items: string[]): string[];
new (arrayLength: number): string[];
new (...items: string[]): string[];
isArray(arg: any): arg is any[];
readonly prototype: any[];
from<T>(arrayLike: ArrayLike<T>): T[];
from<T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
from<T>(iterable: Iterable<T> | ArrayLike<T>): T[];
from<T, U>(iterable: Iterable<T> | ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
of<T>(...items: T[]): T[];
readonly [Symbol.species]: ArrayConstructor;
})[];
default: () => string | string[] | null | undefined;
};
statusIcon: {
type: BooleanConstructor;
default: () => boolean;
};
}, unknown, {
isValid: boolean;
isFocused: boolean;
newIconPack: string;
_elementRef: string;
}, {
parentField(): CreateComponentPublicInstance<Readonly<ExtractPropTypes<    {
type: {
type: PropType<FieldTypeProp>;
default: undefined;
};
label: StringConstructor;
labelFor: StringConstructor;
message: {
type: PropType<FieldMessageProp>;
default: undefined;
};
grouped: BooleanConstructor;
groupMultiline: BooleanConstructor;
position: StringConstructor;
expanded: BooleanConstructor;
horizontal: BooleanConstructor;
addons: {
type: BooleanConstructor;
default: boolean;
};
customClass: StringConstructor;
labelPosition: {
type: StringConstructor;
default: () => FieldLabelPosition | null | undefined;
};
}>>, unknown, {
newType: FieldTypeProp | null;
newMessage: FieldMessageProp | null;
fieldLabelSize: string | null;
numberInputClasses: string[];
_isField: boolean;
}, {
rootClasses(): (string[] | {
'is-expanded': boolean;
'is-horizontal': boolean;
'is-floating-in-label': boolean | "" | undefined;
'is-floating-label': boolean | "" | undefined;
})[];
innerFieldClasses(): (string | {
'is-grouped-multiline': boolean;
} | undefined)[];
hasInnerField(): boolean;
newPosition(): string | undefined;
formattedMessage(): string[] | "";
hasLabel(): string | Slot<any> | undefined;
hasMessage(): Slot<any> | FieldMessagePropItem | FieldMessagePropItem[] | undefined;
}, {
fieldType(): "is-grouped" | "has-addons" | undefined;
hasAddons(): boolean;
wrapNumberinput({ controlsPosition, size }: {
controlsPosition?: string;
size?: string;
}): void;
}, ComponentOptionsMixin, ComponentOptionsMixin, {}, VNodeProps & AllowedComponentProps & ComponentCustomProps & Readonly<ExtractPropTypes<    {
type: {
type: PropType<FieldTypeProp>;
default: undefined;
};
label: StringConstructor;
labelFor: StringConstructor;
message: {
type: PropType<FieldMessageProp>;
default: undefined;
};
grouped: BooleanConstructor;
groupMultiline: BooleanConstructor;
position: StringConstructor;
expanded: BooleanConstructor;
horizontal: BooleanConstructor;
addons: {
type: BooleanConstructor;
default: boolean;
};
customClass: StringConstructor;
labelPosition: {
type: StringConstructor;
default: () => FieldLabelPosition | null | undefined;
};
}>>, {
type: FieldTypeProp;
expanded: boolean;
message: FieldMessageProp;
grouped: boolean;
groupMultiline: boolean;
horizontal: boolean;
addons: boolean;
labelPosition: string;
}, true, {}, {}, {
P: {};
B: {};
D: {};
C: {};
M: {};
Defaults: {};
}, Readonly<ExtractPropTypes<    {
type: {
type: PropType<FieldTypeProp>;
default: undefined;
};
label: StringConstructor;
labelFor: StringConstructor;
message: {
type: PropType<FieldMessageProp>;
default: undefined;
};
grouped: BooleanConstructor;
groupMultiline: BooleanConstructor;
position: StringConstructor;
expanded: BooleanConstructor;
horizontal: BooleanConstructor;
addons: {
type: BooleanConstructor;
default: boolean;
};
customClass: StringConstructor;
labelPosition: {
type: StringConstructor;
default: () => FieldLabelPosition | null | undefined;
};
}>>, {}, {
newType: FieldTypeProp | null;
newMessage: FieldMessageProp | null;
fieldLabelSize: string | null;
numberInputClasses: string[];
_isField: boolean;
}, {
rootClasses(): (string[] | {
'is-expanded': boolean;
'is-horizontal': boolean;
'is-floating-in-label': boolean | "" | undefined;
'is-floating-label': boolean | "" | undefined;
})[];
innerFieldClasses(): (string | {
'is-grouped-multiline': boolean;
} | undefined)[];
hasInnerField(): boolean;
newPosition(): string | undefined;
formattedMessage(): string[] | "";
hasLabel(): string | Slot<any> | undefined;
hasMessage(): Slot<any> | FieldMessagePropItem | FieldMessagePropItem[] | undefined;
}, {
fieldType(): "is-grouped" | "has-addons" | undefined;
hasAddons(): boolean;
wrapNumberinput({ controlsPosition, size }: {
controlsPosition?: string;
size?: string;
}): void;
}, {
type: FieldTypeProp;
expanded: boolean;
message: FieldMessageProp;
grouped: boolean;
groupMultiline: boolean;
horizontal: boolean;
addons: boolean;
labelPosition: string;
}> | undefined;
statusType(): string | undefined;
statusMessage(): Slot<any> | FieldMessagePropItem | FieldMessagePropItem[] | undefined;
iconSize(): "" | "is-medium" | "is-small" | undefined;
}, {
focus(): void;
onBlur($event?: Event): void;
onFocus($event?: Event): void;
getElement(): HTMLInputElement | HTMLButtonElement | HTMLFieldSetElement | HTMLOutputElement | HTMLSelectElement | HTMLTextAreaElement;
setInvalid(): void;
setValidity(type: FieldTypeProp | null, message: FieldMessageProp | null): void;
checkHtml5Validity(): boolean;
}, ComponentOptionsMixin, ComponentOptionsMixin, {
blur: (event?: Event) => true;
focus: (event?: Event) => true;
}, string, PublicProps, Readonly<ExtractPropTypes<    {
size: StringConstructor;
expanded: BooleanConstructor;
loading: BooleanConstructor;
rounded: BooleanConstructor;
icon: StringConstructor;
iconPack: StringConstructor;
maxlength: (NumberConstructor | StringConstructor)[];
useHtml5Validation: {
type: BooleanConstructor;
default: () => boolean;
};
validationMessage: StringConstructor;
locale: {
type: (StringConstructor | {
(arrayLength: number): string[];
(...items: string[]): string[];
new (arrayLength: number): string[];
new (...items: string[]): string[];
isArray(arg: any): arg is any[];
readonly prototype: any[];
from<T>(arrayLike: ArrayLike<T>): T[];
from<T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
from<T>(iterable: Iterable<T> | ArrayLike<T>): T[];
from<T, U>(iterable: Iterable<T> | ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
of<T>(...items: T[]): T[];
readonly [Symbol.species]: ArrayConstructor;
})[];
default: () => string | string[] | null | undefined;
};
statusIcon: {
type: BooleanConstructor;
default: () => boolean;
};
}>> & {
onFocus?: ((event?: Event | undefined) => any) | undefined;
onBlur?: ((event?: Event | undefined) => any) | undefined;
}, {
rounded: boolean;
loading: boolean;
expanded: boolean;
locale: string | string[];
useHtml5Validation: boolean;
statusIcon: boolean;
}, {}>, ComponentOptionsMixin, {
add: (tag: U) => true;
'infinite-scroll': () => true;
remove: (tag: T) => true;
typing: (value: number | string | undefined) => true;
'update:modelValue': (tags: T[]) => true;
}, string, PublicProps, Readonly<ExtractPropTypes<    {
modelValue: {
type: PropType<T[]>;
default: () => never[];
};
data: {
type: PropType<U[]>;
default: () => never[];
};
type: StringConstructor;
closeType: StringConstructor;
attached: {
type: BooleanConstructor;
default: boolean;
};
maxtags: NumberConstructor;
hasCounter: {
type: BooleanConstructor;
default: () => boolean;
};
field: {
type: StringConstructor;
default: string;
};
autocomplete: BooleanConstructor;
groupField: StringConstructor;
groupOptions: StringConstructor;
nativeAutocomplete: StringConstructor;
openOnFocus: BooleanConstructor;
keepOpen: {
type: BooleanConstructor;
default: boolean;
};
keepFirst: BooleanConstructor;
disabled: BooleanConstructor;
ellipsis: BooleanConstructor;
closable: {
type: BooleanConstructor;
default: boolean;
};
ariaCloseLabel: StringConstructor;
confirmKeys: {
type: PropType<string[]>;
default: () => string[];
};
removeOnKeys: {
type: PropType<string[]>;
default: () => string[];
};
allowNew: BooleanConstructor;
onPasteSeparators: {
type: PropType<string[]>;
default: () => string[];
};
beforeAdding: {
type: PropType<(tag: U) => boolean>;
default: () => boolean;
};
allowDuplicates: {
type: BooleanConstructor;
default: boolean;
};
checkInfiniteScroll: {
type: BooleanConstructor;
default: boolean;
};
createTag: {
type: PropType<(tag: U) => T>;
default: (tag: U) => any;
};
appendToBody: BooleanConstructor;
}>> & {
"onUpdate:modelValue"?: ((tags: any[]) => any) | undefined;
"onInfinite-scroll"?: (() => any) | undefined;
onTyping?: ((value: string | number | undefined) => any) | undefined;
onAdd?: ((tag: any) => any) | undefined;
onRemove?: ((tag: any) => any) | undefined;
}, {
data: any[];
field: string;
modelValue: any[];
disabled: boolean;
closable: boolean;
hasCounter: boolean;
autocomplete: boolean;
checkInfiniteScroll: boolean;
keepFirst: boolean;
appendToBody: boolean;
openOnFocus: boolean;
keepOpen: boolean;
confirmKeys: string[];
attached: boolean;
ellipsis: boolean;
removeOnKeys: string[];
allowNew: boolean;
onPasteSeparators: string[];
beforeAdding: (tag: U) => boolean;
allowDuplicates: boolean;
createTag: (tag: U) => T;
}, {}>;

export declare const BTaglist: DefineComponent<    {
attached: BooleanConstructor;
}, unknown, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {
attached: BooleanConstructor;
}>>, {
attached: boolean;
}, {}>;

export declare const BTimepicker: DefineComponent<    {}, {}, {
_isTimepicker: boolean;
}, {
nativeStep(): "1" | undefined;
}, {}, DefineComponent<    {
modelValue: PropType<Date | null>;
inline: BooleanConstructor;
minTime: PropType<Date | null>;
maxTime: PropType<Date | null>;
placeholder: StringConstructor;
editable: BooleanConstructor;
disabled: BooleanConstructor;
hourFormat: {
type: PropType<HourFormat>;
validator: (value: unknown) => value is "24" | "12";
};
incrementHours: {
type: NumberConstructor;
default: number;
};
incrementMinutes: {
type: NumberConstructor;
default: number;
};
incrementSeconds: {
type: NumberConstructor;
default: number;
};
timeFormatter: {
type: PropType<TimeFormatter>;
default: (date: Date, vm: ITimepickerMixin) => string;
};
timeParser: {
type: PropType<TimeParser>;
default: (date: string, vm: ITimepickerMixin) => Date | null;
};
mobileNative: {
type: BooleanConstructor;
default: () => boolean;
};
mobileModal: {
type: BooleanConstructor;
default: () => boolean;
};
timeCreator: {
type: PropType<TimeCreator>;
default: () => Date;
};
position: StringConstructor;
unselectableTimes: {
(arrayLength: number): Date[];
(...items: Date[]): Date[];
new (arrayLength: number): Date[];
new (...items: Date[]): Date[];
isArray(arg: any): arg is any[];
readonly prototype: any[];
from<T>(arrayLike: ArrayLike<T>): T[];
from<T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
from<T>(iterable: Iterable<T> | ArrayLike<T>): T[];
from<T, U>(iterable: Iterable<T> | ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
of<T>(...items: T[]): T[];
readonly [Symbol.species]: ArrayConstructor;
};
openOnFocus: BooleanConstructor;
enableSeconds: BooleanConstructor;
defaultMinutes: NumberConstructor;
defaultSeconds: NumberConstructor;
focusable: {
type: BooleanConstructor;
default: boolean;
};
tzOffset: {
type: NumberConstructor;
default: number;
};
appendToBody: BooleanConstructor;
resetOnMeridianChange: {
type: BooleanConstructor;
default: boolean;
};
}, unknown, {
dateSelected: Date | null | undefined;
hoursSelected: number | null;
minutesSelected: number | null;
secondsSelected: number | null;
meridienSelected: string | null;
_elementRef: string;
AM: string;
PM: string;
HOUR_FORMAT_24: string;
HOUR_FORMAT_12: string;
}, {
computedValue: {
get(): {
toString: () => string;
toDateString: () => string;
toTimeString: () => string;
toLocaleString: {
(): string;
(locales?: string | string[], options?: Intl.DateTimeFormatOptions): string;
(locales?: Intl.LocalesArgument, options?: Intl.DateTimeFormatOptions): string;
};
toLocaleDateString: {
(): string;
(locales?: string | string[], options?: Intl.DateTimeFormatOptions): string;
(locales?: Intl.LocalesArgument, options?: Intl.DateTimeFormatOptions): string;
};
toLocaleTimeString: {
(): string;
(locales?: string | string[], options?: Intl.DateTimeFormatOptions): string;
(locales?: Intl.LocalesArgument, options?: Intl.DateTimeFormatOptions): string;
};
valueOf: () => number;
getTime: () => number;
getFullYear: () => number;
getUTCFullYear: () => number;
getMonth: () => number;
getUTCMonth: () => number;
getDate: () => number;
getUTCDate: () => number;
getDay: () => number;
getUTCDay: () => number;
getHours: () => number;
getUTCHours: () => number;
getMinutes: () => number;
getUTCMinutes: () => number;
getSeconds: () => number;
getUTCSeconds: () => number;
getMilliseconds: () => number;
getUTCMilliseconds: () => number;
getTimezoneOffset: () => number;
setTime: (time: number) => number;
setMilliseconds: (ms: number) => number;
setUTCMilliseconds: (ms: number) => number;
setSeconds: (sec: number, ms?: number) => number;
setUTCSeconds: (sec: number, ms?: number) => number;
setMinutes: (min: number, sec?: number, ms?: number) => number;
setUTCMinutes: (min: number, sec?: number, ms?: number) => number;
setHours: (hours: number, min?: number, sec?: number, ms?: number) => number;
setUTCHours: (hours: number, min?: number, sec?: number, ms?: number) => number;
setDate: (date: number) => number;
setUTCDate: (date: number) => number;
setMonth: (month: number, date?: number) => number;
setUTCMonth: (month: number, date?: number) => number;
setFullYear: (year: number, month?: number, date?: number) => number;
setUTCFullYear: (year: number, month?: number, date?: number) => number;
toUTCString: () => string;
toISOString: () => string;
toJSON: (key?: any) => string;
[Symbol.toPrimitive]: {
(hint: "default"): string;
(hint: "string"): string;
(hint: "number"): number;
(hint: string): string | number;
};
} | null | undefined;
set(value: Date | null): void;
};
localeOptions(): Intl.DateTimeFormatOptions;
dtf(): Intl.DateTimeFormat;
newHourFormat(): HourFormat;
sampleTime(): Date;
hourLiteral(): string;
minuteLiteral(): string;
secondLiteral(): string | undefined;
amString(): string;
pmString(): string;
hours(): {
label: string;
value: number;
}[];
minutes(): {
label: string;
value: number;
}[];
seconds(): {
label: string;
value: number;
}[];
meridiens(): string[];
isMobile(): boolean | RegExpMatchArray | null;
isHourFormat24(): boolean;
disabledOrUndefined(): true | undefined;
}, {
onMeridienChange(value: string): void;
onHoursChange(value: number | string): void;
onMinutesChange(value: number | string): void;
onSecondsChange(value: number | string): void;
updateDateSelected(hours: number | null, minutes: number | null, seconds: number | null, meridiens: string | null): void;
updateInternalState(value?: Date | null): void;
isHourDisabled(hour: number): boolean;
isMinuteDisabledForHour(hour: number, minute: number): boolean;
isMinuteDisabled(minute: number): boolean;
isSecondDisabled(second: number): boolean;
onChange(value: string): void;
toggle(active: boolean): void;
close(): void;
handleOnFocus(): void;
formatHHMMSS(value: Date | null | undefined): string;
onChangeNativePicker(event: {
target: EventTarget;
}): void;
formatNumber(value: number, prependZero?: boolean): string;
pad(value: number): string;
formatValue(date: Date | null | undefined): string | null;
keyPress({ key }: {
key: KeyboardEvent["key"];
}): void;
onActiveChange(value: boolean): void;
}, DefineComponent<    {
compatFallthrough: {
type: BooleanConstructor;
default: () => boolean;
};
}, unknown, unknown, {
rootAttrs(): {
class: unknown;
style: StyleValue;
id: string | undefined;
} | {
class?: undefined;
style?: undefined;
id?: undefined;
};
fallthroughAttrs(): {
[x: string]: unknown;
};
}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {
compatFallthrough: {
type: BooleanConstructor;
default: () => boolean;
};
}>>, {
compatFallthrough: boolean;
}, {}> | DefineComponent<    {
size: StringConstructor;
expanded: BooleanConstructor;
loading: BooleanConstructor;
rounded: BooleanConstructor;
icon: StringConstructor;
iconPack: StringConstructor;
maxlength: (NumberConstructor | StringConstructor)[];
useHtml5Validation: {
type: BooleanConstructor;
default: () => boolean;
};
validationMessage: StringConstructor;
locale: {
type: (StringConstructor | {
(arrayLength: number): string[];
(...items: string[]): string[];
new (arrayLength: number): string[];
new (...items: string[]): string[];
isArray(arg: any): arg is any[];
readonly prototype: any[];
from<T>(arrayLike: ArrayLike<T>): T[];
from<T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
from<T>(iterable: Iterable<T> | ArrayLike<T>): T[];
from<T, U>(iterable: Iterable<T> | ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
of<T>(...items: T[]): T[];
readonly [Symbol.species]: ArrayConstructor;
})[];
default: () => string | string[] | null | undefined;
};
statusIcon: {
type: BooleanConstructor;
default: () => boolean;
};
}, unknown, {
isValid: boolean;
isFocused: boolean;
newIconPack: string;
_elementRef: string;
}, {
parentField(): CreateComponentPublicInstance<Readonly<ExtractPropTypes<    {
type: {
type: PropType<FieldTypeProp>;
default: undefined;
};
label: StringConstructor;
labelFor: StringConstructor;
message: {
type: PropType<FieldMessageProp>;
default: undefined;
};
grouped: BooleanConstructor;
groupMultiline: BooleanConstructor;
position: StringConstructor;
expanded: BooleanConstructor;
horizontal: BooleanConstructor;
addons: {
type: BooleanConstructor;
default: boolean;
};
customClass: StringConstructor;
labelPosition: {
type: StringConstructor;
default: () => FieldLabelPosition | null | undefined;
};
}>>, unknown, {
newType: FieldTypeProp | null;
newMessage: FieldMessageProp | null;
fieldLabelSize: string | null;
numberInputClasses: string[];
_isField: boolean;
}, {
rootClasses(): (string[] | {
'is-expanded': boolean;
'is-horizontal': boolean;
'is-floating-in-label': boolean | "" | undefined;
'is-floating-label': boolean | "" | undefined;
})[];
innerFieldClasses(): (string | {
'is-grouped-multiline': boolean;
} | undefined)[];
hasInnerField(): boolean;
newPosition(): string | undefined;
formattedMessage(): string[] | "";
hasLabel(): string | Slot<any> | undefined;
hasMessage(): Slot<any> | FieldMessagePropItem | FieldMessagePropItem[] | undefined;
}, {
fieldType(): "is-grouped" | "has-addons" | undefined;
hasAddons(): boolean;
wrapNumberinput({ controlsPosition, size }: {
controlsPosition?: string;
size?: string;
}): void;
}, ComponentOptionsMixin, ComponentOptionsMixin, {}, VNodeProps & AllowedComponentProps & ComponentCustomProps & Readonly<ExtractPropTypes<    {
type: {
type: PropType<FieldTypeProp>;
default: undefined;
};
label: StringConstructor;
labelFor: StringConstructor;
message: {
type: PropType<FieldMessageProp>;
default: undefined;
};
grouped: BooleanConstructor;
groupMultiline: BooleanConstructor;
position: StringConstructor;
expanded: BooleanConstructor;
horizontal: BooleanConstructor;
addons: {
type: BooleanConstructor;
default: boolean;
};
customClass: StringConstructor;
labelPosition: {
type: StringConstructor;
default: () => FieldLabelPosition | null | undefined;
};
}>>, {
type: FieldTypeProp;
expanded: boolean;
message: FieldMessageProp;
grouped: boolean;
groupMultiline: boolean;
horizontal: boolean;
addons: boolean;
labelPosition: string;
}, true, {}, {}, {
P: {};
B: {};
D: {};
C: {};
M: {};
Defaults: {};
}, Readonly<ExtractPropTypes<    {
type: {
type: PropType<FieldTypeProp>;
default: undefined;
};
label: StringConstructor;
labelFor: StringConstructor;
message: {
type: PropType<FieldMessageProp>;
default: undefined;
};
grouped: BooleanConstructor;
groupMultiline: BooleanConstructor;
position: StringConstructor;
expanded: BooleanConstructor;
horizontal: BooleanConstructor;
addons: {
type: BooleanConstructor;
default: boolean;
};
customClass: StringConstructor;
labelPosition: {
type: StringConstructor;
default: () => FieldLabelPosition | null | undefined;
};
}>>, {}, {
newType: FieldTypeProp | null;
newMessage: FieldMessageProp | null;
fieldLabelSize: string | null;
numberInputClasses: string[];
_isField: boolean;
}, {
rootClasses(): (string[] | {
'is-expanded': boolean;
'is-horizontal': boolean;
'is-floating-in-label': boolean | "" | undefined;
'is-floating-label': boolean | "" | undefined;
})[];
innerFieldClasses(): (string | {
'is-grouped-multiline': boolean;
} | undefined)[];
hasInnerField(): boolean;
newPosition(): string | undefined;
formattedMessage(): string[] | "";
hasLabel(): string | Slot<any> | undefined;
hasMessage(): Slot<any> | FieldMessagePropItem | FieldMessagePropItem[] | undefined;
}, {
fieldType(): "is-grouped" | "has-addons" | undefined;
hasAddons(): boolean;
wrapNumberinput({ controlsPosition, size }: {
controlsPosition?: string;
size?: string;
}): void;
}, {
type: FieldTypeProp;
expanded: boolean;
message: FieldMessageProp;
grouped: boolean;
groupMultiline: boolean;
horizontal: boolean;
addons: boolean;
labelPosition: string;
}> | undefined;
statusType(): string | undefined;
statusMessage(): Slot<any> | FieldMessagePropItem | FieldMessagePropItem[] | undefined;
iconSize(): "" | "is-medium" | "is-small" | undefined;
}, {
focus(): void;
onBlur($event?: Event): void;
onFocus($event?: Event): void;
getElement(): HTMLInputElement | HTMLButtonElement | HTMLFieldSetElement | HTMLOutputElement | HTMLSelectElement | HTMLTextAreaElement;
setInvalid(): void;
setValidity(type: FieldTypeProp | null, message: FieldMessageProp | null): void;
checkHtml5Validity(): boolean;
}, ComponentOptionsMixin, ComponentOptionsMixin, {
blur: (event?: Event) => true;
focus: (event?: Event) => true;
}, string, PublicProps, Readonly<ExtractPropTypes<    {
size: StringConstructor;
expanded: BooleanConstructor;
loading: BooleanConstructor;
rounded: BooleanConstructor;
icon: StringConstructor;
iconPack: StringConstructor;
maxlength: (NumberConstructor | StringConstructor)[];
useHtml5Validation: {
type: BooleanConstructor;
default: () => boolean;
};
validationMessage: StringConstructor;
locale: {
type: (StringConstructor | {
(arrayLength: number): string[];
(...items: string[]): string[];
new (arrayLength: number): string[];
new (...items: string[]): string[];
isArray(arg: any): arg is any[];
readonly prototype: any[];
from<T>(arrayLike: ArrayLike<T>): T[];
from<T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
from<T>(iterable: Iterable<T> | ArrayLike<T>): T[];
from<T, U>(iterable: Iterable<T> | ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
of<T>(...items: T[]): T[];
readonly [Symbol.species]: ArrayConstructor;
})[];
default: () => string | string[] | null | undefined;
};
statusIcon: {
type: BooleanConstructor;
default: () => boolean;
};
}>> & {
onFocus?: ((event?: Event | undefined) => any) | undefined;
onBlur?: ((event?: Event | undefined) => any) | undefined;
}, {
rounded: boolean;
loading: boolean;
expanded: boolean;
locale: string | string[];
useHtml5Validation: boolean;
statusIcon: boolean;
}, {}>, ComponentOptionsMixin, {
'update:modelValue': (_value: Date | null) => true;
}, string, PublicProps, Readonly<ExtractPropTypes<    {
modelValue: PropType<Date | null>;
inline: BooleanConstructor;
minTime: PropType<Date | null>;
maxTime: PropType<Date | null>;
placeholder: StringConstructor;
editable: BooleanConstructor;
disabled: BooleanConstructor;
hourFormat: {
type: PropType<HourFormat>;
validator: (value: unknown) => value is "24" | "12";
};
incrementHours: {
type: NumberConstructor;
default: number;
};
incrementMinutes: {
type: NumberConstructor;
default: number;
};
incrementSeconds: {
type: NumberConstructor;
default: number;
};
timeFormatter: {
type: PropType<TimeFormatter>;
default: (date: Date, vm: ITimepickerMixin) => string;
};
timeParser: {
type: PropType<TimeParser>;
default: (date: string, vm: ITimepickerMixin) => Date | null;
};
mobileNative: {
type: BooleanConstructor;
default: () => boolean;
};
mobileModal: {
type: BooleanConstructor;
default: () => boolean;
};
timeCreator: {
type: PropType<TimeCreator>;
default: () => Date;
};
position: StringConstructor;
unselectableTimes: {
(arrayLength: number): Date[];
(...items: Date[]): Date[];
new (arrayLength: number): Date[];
new (...items: Date[]): Date[];
isArray(arg: any): arg is any[];
readonly prototype: any[];
from<T>(arrayLike: ArrayLike<T>): T[];
from<T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
from<T>(iterable: Iterable<T> | ArrayLike<T>): T[];
from<T, U>(iterable: Iterable<T> | ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
of<T>(...items: T[]): T[];
readonly [Symbol.species]: ArrayConstructor;
};
openOnFocus: BooleanConstructor;
enableSeconds: BooleanConstructor;
defaultMinutes: NumberConstructor;
defaultSeconds: NumberConstructor;
focusable: {
type: BooleanConstructor;
default: boolean;
};
tzOffset: {
type: NumberConstructor;
default: number;
};
appendToBody: BooleanConstructor;
resetOnMeridianChange: {
type: BooleanConstructor;
default: boolean;
};
}>> & {
"onUpdate:modelValue"?: ((_value: Date | null) => any) | undefined;
}, {
disabled: boolean;
appendToBody: boolean;
openOnFocus: boolean;
inline: boolean;
mobileModal: boolean;
focusable: boolean;
editable: boolean;
incrementHours: number;
incrementMinutes: number;
incrementSeconds: number;
timeFormatter: TimeFormatter;
timeParser: TimeParser;
mobileNative: boolean;
timeCreator: TimeCreator;
enableSeconds: boolean;
tzOffset: number;
resetOnMeridianChange: boolean;
}, {}>, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {}>>, {}, {}>;

export declare const BToast: DefineComponent<    {}, {}, {
newDuration: number;
}, {}, {}, DefineComponent<    {
type: {
type: StringConstructor;
default: string;
};
message: PropType<string | string[]>;
duration: NumberConstructor;
queue: {
type: BooleanConstructor;
default: undefined;
};
indefinite: {
type: BooleanConstructor;
default: boolean;
};
pauseOnHover: {
type: BooleanConstructor;
default: boolean;
};
position: {
type: PropType<NoticePosition>;
default: string;
validator(value: unknown): value is NoticePosition;
};
container: StringConstructor;
}, unknown, {
isActive: boolean;
isPaused: boolean;
parentTop: Element | null;
parentBottom: Element | null;
newContainer: string | null | undefined;
timer: ReturnType<typeof setTimeout> | undefined;
newDuration: number;
}, {
correctParent(): Element;
transition(): {
enter: string;
leave: string;
};
}, {
pause(): void;
removePause(): void;
shouldQueue(): boolean;
click(): void;
close(): void;
timeoutCallback(): void;
showNotice(): void;
setupContainer(): void;
}, ComponentOptionsMixin, ComponentOptionsMixin, {
click: () => true;
close: () => true;
}, string, PublicProps, Readonly<ExtractPropTypes<    {
type: {
type: StringConstructor;
default: string;
};
message: PropType<string | string[]>;
duration: NumberConstructor;
queue: {
type: BooleanConstructor;
default: undefined;
};
indefinite: {
type: BooleanConstructor;
default: boolean;
};
pauseOnHover: {
type: BooleanConstructor;
default: boolean;
};
position: {
type: PropType<NoticePosition>;
default: string;
validator(value: unknown): value is NoticePosition;
};
container: StringConstructor;
}>> & {
onClick?: (() => any) | undefined;
onClose?: (() => any) | undefined;
}, {
type: string;
position: "is-top-right" | "is-top" | "is-top-left" | "is-bottom-right" | "is-bottom" | "is-bottom-left";
queue: boolean;
indefinite: boolean;
pauseOnHover: boolean;
}, {}>, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {}>>, {}, {}>;

export declare const BTooltip: DefineComponent<    {
active: {
type: BooleanConstructor;
default: boolean;
};
type: {
type: StringConstructor;
default: () => string;
};
label: StringConstructor;
delay: {
type: NumberConstructor;
default: () => number | null | undefined;
};
closeDelay: {
type: NumberConstructor;
default: () => number | null | undefined;
};
position: {
type: PropType<TooltipPosition>;
default: string;
validator(value: unknown): boolean;
};
triggers: {
type: ArrayConstructor;
default: () => string[];
};
always: BooleanConstructor;
square: BooleanConstructor;
dashed: BooleanConstructor;
multilined: BooleanConstructor;
size: {
type: StringConstructor;
default: string;
};
appendToBody: BooleanConstructor;
animated: {
type: BooleanConstructor;
default: boolean;
};
animation: {
type: StringConstructor;
default: string;
};
contentClass: StringConstructor;
autoClose: {
type: (BooleanConstructor | {
(arrayLength: number): ("escape" | "outside" | "inside")[];
(...items: ("escape" | "outside" | "inside")[]): ("escape" | "outside" | "inside")[];
new (arrayLength: number): ("escape" | "outside" | "inside")[];
new (...items: ("escape" | "outside" | "inside")[]): ("escape" | "outside" | "inside")[];
isArray(arg: any): arg is any[];
readonly prototype: any[];
from<T>(arrayLike: ArrayLike<T>): T[];
from<T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
from<T>(iterable: Iterable<T> | ArrayLike<T>): T[];
from<T, U>(iterable: Iterable<T> | ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
of<T>(...items: T[]): T[];
readonly [Symbol.species]: ArrayConstructor;
})[];
default: boolean;
};
}, unknown, {
isActive: boolean;
triggerStyle: {};
timer: ReturnType<typeof setTimeout> | undefined;
_bodyEl: HTMLElement | undefined;
resizeObserver: ResizeObserver | undefined;
resizeListener: (() => void) | undefined;
timeOutID: ReturnType<typeof setTimeout> | undefined;
controller: AbortController | undefined;
dynamicPosition: TooltipPosition | undefined;
}, {
rootClasses(): VueClassAttribute[];
newAnimation(): string | undefined;
}, {
computePosition(): TooltipPosition;
updateAppendToBody(): void;
onClick(): void;
onHover(): void;
onContextMenu(e: {
preventDefault: Event["preventDefault"];
}): void;
onFocus(): void;
open(): void;
close(): void;
clickedOutside(event: MouseEvent): void;
keyPress({ key }: {
key: KeyboardEvent["key"];
}): void;
isInWhiteList(el: EventTarget | null): boolean;
}, ComponentOptionsMixin, ComponentOptionsMixin, {
close: () => true;
open: () => true;
}, string, PublicProps, Readonly<ExtractPropTypes<    {
active: {
type: BooleanConstructor;
default: boolean;
};
type: {
type: StringConstructor;
default: () => string;
};
label: StringConstructor;
delay: {
type: NumberConstructor;
default: () => number | null | undefined;
};
closeDelay: {
type: NumberConstructor;
default: () => number | null | undefined;
};
position: {
type: PropType<TooltipPosition>;
default: string;
validator(value: unknown): boolean;
};
triggers: {
type: ArrayConstructor;
default: () => string[];
};
always: BooleanConstructor;
square: BooleanConstructor;
dashed: BooleanConstructor;
multilined: BooleanConstructor;
size: {
type: StringConstructor;
default: string;
};
appendToBody: BooleanConstructor;
animated: {
type: BooleanConstructor;
default: boolean;
};
animation: {
type: StringConstructor;
default: string;
};
contentClass: StringConstructor;
autoClose: {
type: (BooleanConstructor | {
(arrayLength: number): ("escape" | "outside" | "inside")[];
(...items: ("escape" | "outside" | "inside")[]): ("escape" | "outside" | "inside")[];
new (arrayLength: number): ("escape" | "outside" | "inside")[];
new (...items: ("escape" | "outside" | "inside")[]): ("escape" | "outside" | "inside")[];
isArray(arg: any): arg is any[];
readonly prototype: any[];
from<T>(arrayLike: ArrayLike<T>): T[];
from<T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
from<T>(iterable: Iterable<T> | ArrayLike<T>): T[];
from<T, U>(iterable: Iterable<T> | ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
of<T>(...items: T[]): T[];
readonly [Symbol.species]: ArrayConstructor;
})[];
default: boolean;
};
}>> & {
onClose?: (() => any) | undefined;
onOpen?: (() => any) | undefined;
}, {
size: string;
type: string;
animation: string;
active: boolean;
autoClose: boolean | ("escape" | "outside" | "inside")[];
position: "is-top" | "is-bottom" | "is-left" | "is-right" | "is-auto";
appendToBody: boolean;
animated: boolean;
square: boolean;
triggers: unknown[];
delay: number;
closeDelay: number;
always: boolean;
dashed: boolean;
multilined: boolean;
}, {}>;

declare const Buefy: {
    install(Vue: App, options?: BuefyConfigOptions): void;
};
export default Buefy;

export declare interface BuefyConfig {
    defaultContainerElement?: string | null;
    defaultIconPack: string;
    defaultIconComponent?: string | null;
    defaultIconPrev: string;
    defaultIconNext: string;
    defaultLocale?: string | string[] | null;
    defaultDialogConfirmText?: string | null;
    defaultDialogCancelText?: string | null;
    defaultSnackbarDuration: number;
    defaultSnackbarPosition?: NoticePosition | null;
    defaultToastDuration: number;
    defaultToastPosition?: NoticePosition | null;
    defaultNotificationDuration: number;
    defaultNotificationPosition?: NoticePosition | null;
    defaultTooltipType: string;
    defaultTooltipDelay?: number | null;
    defaultTooltipCloseDelay?: number | null;
    defaultSidebarDelay?: number | null;
    defaultInputAutocomplete: string;
    defaultDateFormatter?: ((date: Date) => string) | null;
    defaultDateParser?: ((date: string) => Date | null) | null;
    defaultDateCreator?: (() => Date) | null;
    defaultTimeCreator?: (() => Date) | null;
    defaultDayNames?: string[] | null;
    defaultMonthNames?: string[] | null;
    defaultFirstDayOfWeek?: number | null;
    defaultUnselectableDaysOfWeek?: number[] | null;
    defaultTimeFormatter?: ((date: Date) => string) | null;
    defaultTimeParser?: ((date: string) => Date | null) | null;
    defaultDatetimeFormatter?: ((date: Date) => string) | null;
    defaultDatetimeParser?: ((date: string) => Date | null) | null;
    defaultDatetimeCreator?: ((date: Date) => Date) | null;
    defaultClockpickerHoursLabel?: string | null;
    defaultClockpickerMinutesLabel?: string | null;
    defaultColorFormatter?: ((color: Color) => string) | null;
    defaultColorParser?: ((color: string) => Color | null) | null;
    defaultModalCanCancel: ModalCancellableOption[];
    defaultModalScroll?: ModalScrollOption | null;
    defaultDatepickerMobileNative: boolean;
    defaultTimepickerMobileNative: boolean;
    defaultTimepickerMobileModal: boolean;
    defaultNoticeQueue: boolean;
    defaultInputHasCounter: boolean;
    defaultCompatFallthrough: boolean;
    defaultTaginputHasCounter: boolean;
    defaultUseHtml5Validation: boolean;
    defaultDropdownMobileModal: boolean;
    defaultFieldLabelPosition?: FieldLabelPosition | null;
    defaultDatepickerYearsRange: [number, number];
    defaultDatepickerNearbyMonthDays: boolean;
    defaultDatepickerNearbySelectableMonthDays: boolean;
    defaultDatepickerShowWeekNumber: boolean;
    defaultDatepickerWeekNumberClickable: boolean;
    defaultDatepickerMobileModal: boolean;
    defaultTrapFocus: boolean;
    defaultAutoFocus: boolean;
    defaultButtonRounded: boolean;
    defaultSwitchRounded: boolean;
    defaultCarouselInterval: number;
    defaultTabsExpanded: boolean;
    defaultTabsAnimated: boolean;
    defaultTabsType?: VueClassAttribute | null;
    defaultStatusIcon: boolean;
    defaultProgrammaticPromise: boolean;
    defaultLinkTags: string[];
    defaultImageWebpFallback?: string | null;
    defaultImageLazy: boolean;
    defaultImageResponsive: boolean;
    defaultImageRatio?: number | null;
    defaultImageSrcsetFormatter?: ((src: string, size: number) => string) | null;
    defaultBreadcrumbTag: string;
    defaultBreadcrumbAlign: string;
    defaultBreadcrumbSeparator: string;
    defaultBreadcrumbSize: string;
    customIconPacks?: Record<string, IconPack> | null;
}

export declare type BuefyConfigOptions = Partial<BuefyConfig>;

export declare const BUpload: DefineComponent<    {
modelValue: {
type: PropType<File | Array<File> | null>;
};
multiple: BooleanConstructor;
disabled: BooleanConstructor;
accept: StringConstructor;
dragDrop: BooleanConstructor;
type: {
type: StringConstructor;
default: string;
};
native: {
type: BooleanConstructor;
default: boolean;
};
expanded: {
type: BooleanConstructor;
default: boolean;
};
rounded: {
type: BooleanConstructor;
default: boolean;
};
}, unknown, {
newValue: File | File[] | null | undefined;
dragDropFocus: boolean;
_elementRef: string;
}, {
disabledOrUndefined(): true | undefined;
}, {
onFileChange(event: Event): void;
clearInput(): void;
updateDragDropFocus(focus: boolean): void;
checkType(file: File): boolean;
}, DefineComponent<    {
compatFallthrough: {
type: BooleanConstructor;
default: () => boolean;
};
}, unknown, unknown, {
rootAttrs(): {
class: unknown;
style: StyleValue;
id: string | undefined;
} | {
class?: undefined;
style?: undefined;
id?: undefined;
};
fallthroughAttrs(): {
[x: string]: unknown;
};
}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {
compatFallthrough: {
type: BooleanConstructor;
default: () => boolean;
};
}>>, {
compatFallthrough: boolean;
}, {}> | DefineComponent<    {
size: StringConstructor;
expanded: BooleanConstructor;
loading: BooleanConstructor;
rounded: BooleanConstructor;
icon: StringConstructor;
iconPack: StringConstructor;
maxlength: (NumberConstructor | StringConstructor)[];
useHtml5Validation: {
type: BooleanConstructor;
default: () => boolean;
};
validationMessage: StringConstructor;
locale: {
type: (StringConstructor | {
(arrayLength: number): string[];
(...items: string[]): string[];
new (arrayLength: number): string[];
new (...items: string[]): string[];
isArray(arg: any): arg is any[];
readonly prototype: any[];
from<T>(arrayLike: ArrayLike<T>): T[];
from<T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
from<T>(iterable: Iterable<T> | ArrayLike<T>): T[];
from<T, U>(iterable: Iterable<T> | ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
of<T>(...items: T[]): T[];
readonly [Symbol.species]: ArrayConstructor;
})[];
default: () => string | string[] | null | undefined;
};
statusIcon: {
type: BooleanConstructor;
default: () => boolean;
};
}, unknown, {
isValid: boolean;
isFocused: boolean;
newIconPack: string;
_elementRef: string;
}, {
parentField(): CreateComponentPublicInstance<Readonly<ExtractPropTypes<    {
type: {
type: PropType<FieldTypeProp>;
default: undefined;
};
label: StringConstructor;
labelFor: StringConstructor;
message: {
type: PropType<FieldMessageProp>;
default: undefined;
};
grouped: BooleanConstructor;
groupMultiline: BooleanConstructor;
position: StringConstructor;
expanded: BooleanConstructor;
horizontal: BooleanConstructor;
addons: {
type: BooleanConstructor;
default: boolean;
};
customClass: StringConstructor;
labelPosition: {
type: StringConstructor;
default: () => FieldLabelPosition | null | undefined;
};
}>>, unknown, {
newType: FieldTypeProp | null;
newMessage: FieldMessageProp | null;
fieldLabelSize: string | null;
numberInputClasses: string[];
_isField: boolean;
}, {
rootClasses(): (string[] | {
'is-expanded': boolean;
'is-horizontal': boolean;
'is-floating-in-label': boolean | "" | undefined;
'is-floating-label': boolean | "" | undefined;
})[];
innerFieldClasses(): (string | {
'is-grouped-multiline': boolean;
} | undefined)[];
hasInnerField(): boolean;
newPosition(): string | undefined;
formattedMessage(): string[] | "";
hasLabel(): string | Slot<any> | undefined;
hasMessage(): Slot<any> | FieldMessagePropItem | FieldMessagePropItem[] | undefined;
}, {
fieldType(): "is-grouped" | "has-addons" | undefined;
hasAddons(): boolean;
wrapNumberinput({ controlsPosition, size }: {
controlsPosition?: string;
size?: string;
}): void;
}, ComponentOptionsMixin, ComponentOptionsMixin, {}, VNodeProps & AllowedComponentProps & ComponentCustomProps & Readonly<ExtractPropTypes<    {
type: {
type: PropType<FieldTypeProp>;
default: undefined;
};
label: StringConstructor;
labelFor: StringConstructor;
message: {
type: PropType<FieldMessageProp>;
default: undefined;
};
grouped: BooleanConstructor;
groupMultiline: BooleanConstructor;
position: StringConstructor;
expanded: BooleanConstructor;
horizontal: BooleanConstructor;
addons: {
type: BooleanConstructor;
default: boolean;
};
customClass: StringConstructor;
labelPosition: {
type: StringConstructor;
default: () => FieldLabelPosition | null | undefined;
};
}>>, {
type: FieldTypeProp;
expanded: boolean;
message: FieldMessageProp;
grouped: boolean;
groupMultiline: boolean;
horizontal: boolean;
addons: boolean;
labelPosition: string;
}, true, {}, {}, {
P: {};
B: {};
D: {};
C: {};
M: {};
Defaults: {};
}, Readonly<ExtractPropTypes<    {
type: {
type: PropType<FieldTypeProp>;
default: undefined;
};
label: StringConstructor;
labelFor: StringConstructor;
message: {
type: PropType<FieldMessageProp>;
default: undefined;
};
grouped: BooleanConstructor;
groupMultiline: BooleanConstructor;
position: StringConstructor;
expanded: BooleanConstructor;
horizontal: BooleanConstructor;
addons: {
type: BooleanConstructor;
default: boolean;
};
customClass: StringConstructor;
labelPosition: {
type: StringConstructor;
default: () => FieldLabelPosition | null | undefined;
};
}>>, {}, {
newType: FieldTypeProp | null;
newMessage: FieldMessageProp | null;
fieldLabelSize: string | null;
numberInputClasses: string[];
_isField: boolean;
}, {
rootClasses(): (string[] | {
'is-expanded': boolean;
'is-horizontal': boolean;
'is-floating-in-label': boolean | "" | undefined;
'is-floating-label': boolean | "" | undefined;
})[];
innerFieldClasses(): (string | {
'is-grouped-multiline': boolean;
} | undefined)[];
hasInnerField(): boolean;
newPosition(): string | undefined;
formattedMessage(): string[] | "";
hasLabel(): string | Slot<any> | undefined;
hasMessage(): Slot<any> | FieldMessagePropItem | FieldMessagePropItem[] | undefined;
}, {
fieldType(): "is-grouped" | "has-addons" | undefined;
hasAddons(): boolean;
wrapNumberinput({ controlsPosition, size }: {
controlsPosition?: string;
size?: string;
}): void;
}, {
type: FieldTypeProp;
expanded: boolean;
message: FieldMessageProp;
grouped: boolean;
groupMultiline: boolean;
horizontal: boolean;
addons: boolean;
labelPosition: string;
}> | undefined;
statusType(): string | undefined;
statusMessage(): Slot<any> | FieldMessagePropItem | FieldMessagePropItem[] | undefined;
iconSize(): "" | "is-medium" | "is-small" | undefined;
}, {
focus(): void;
onBlur($event?: Event): void;
onFocus($event?: Event): void;
getElement(): HTMLInputElement | HTMLButtonElement | HTMLFieldSetElement | HTMLOutputElement | HTMLSelectElement | HTMLTextAreaElement;
setInvalid(): void;
setValidity(type: FieldTypeProp | null, message: FieldMessageProp | null): void;
checkHtml5Validity(): boolean;
}, ComponentOptionsMixin, ComponentOptionsMixin, {
blur: (event?: Event) => true;
focus: (event?: Event) => true;
}, string, PublicProps, Readonly<ExtractPropTypes<    {
size: StringConstructor;
expanded: BooleanConstructor;
loading: BooleanConstructor;
rounded: BooleanConstructor;
icon: StringConstructor;
iconPack: StringConstructor;
maxlength: (NumberConstructor | StringConstructor)[];
useHtml5Validation: {
type: BooleanConstructor;
default: () => boolean;
};
validationMessage: StringConstructor;
locale: {
type: (StringConstructor | {
(arrayLength: number): string[];
(...items: string[]): string[];
new (arrayLength: number): string[];
new (...items: string[]): string[];
isArray(arg: any): arg is any[];
readonly prototype: any[];
from<T>(arrayLike: ArrayLike<T>): T[];
from<T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
from<T>(iterable: Iterable<T> | ArrayLike<T>): T[];
from<T, U>(iterable: Iterable<T> | ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
of<T>(...items: T[]): T[];
readonly [Symbol.species]: ArrayConstructor;
})[];
default: () => string | string[] | null | undefined;
};
statusIcon: {
type: BooleanConstructor;
default: () => boolean;
};
}>> & {
onFocus?: ((event?: Event | undefined) => any) | undefined;
onBlur?: ((event?: Event | undefined) => any) | undefined;
}, {
rounded: boolean;
loading: boolean;
expanded: boolean;
locale: string | string[];
useHtml5Validation: boolean;
statusIcon: boolean;
}, {}>, ComponentOptionsMixin, {
invalid: () => true;
'update:modelValue': (newValue: File | Array<File> | null) => true;
}, string, PublicProps, Readonly<ExtractPropTypes<    {
modelValue: {
type: PropType<File | Array<File> | null>;
};
multiple: BooleanConstructor;
disabled: BooleanConstructor;
accept: StringConstructor;
dragDrop: BooleanConstructor;
type: {
type: StringConstructor;
default: string;
};
native: {
type: BooleanConstructor;
default: boolean;
};
expanded: {
type: BooleanConstructor;
default: boolean;
};
rounded: {
type: BooleanConstructor;
default: boolean;
};
}>> & {
onInvalid?: (() => any) | undefined;
"onUpdate:modelValue"?: ((newValue: File | File[] | null) => any) | undefined;
}, {
type: string;
rounded: boolean;
expanded: boolean;
disabled: boolean;
multiple: boolean;
dragDrop: boolean;
native: boolean;
}, {}>;

export declare const Button: {
    install(Vue: App): void;
};

declare type ButtonNativeType = typeof NATIVE_TYPES[number];

declare const CANCEL_METHODS: string[];

declare type CancelHandler = (method: CancelMethod, ...args: any[]) => void;

declare type CancelMethod = typeof CANCEL_METHODS[number];

export declare const Carousel: {
    install(Vue: App): void;
};

export declare const Checkbox: {
    install(Vue: App): void;
};

export declare const Clockpicker: {
    install(Vue: App): void;
};

export declare const Collapse: {
    install(Vue: App): void;
};

declare const COLLAPSE_POSITIONS: readonly ["is-top", "is-bottom"];

declare type CollapsePosition = typeof COLLAPSE_POSITIONS[number];

export declare class Color {
    $channels: Uint8Array;
    constructor(...args: any[]);
    get red(): number;
    set red(byte: number);
    get green(): number;
    set green(byte: number);
    get blue(): number;
    set blue(byte: number);
    get alpha(): number;
    set alpha(byte: number);
    get hue(): number;
    set hue(value: number);
    get saturation(): number;
    set saturation(value: number);
    get lightness(): number;
    set lightness(value: number);
    getHue(): number;
    setHue(value: number): void;
    getSaturation(): number;
    setSaturation(value: number): void;
    getLightness(): number;
    setLightness(value: number): void;
    clone(): Color;
    toString(type?: string): string;
    get [Symbol.toStringTag](): string;
    static parse(...args: any[]): Color;
    static parseObject(object: unknown): Color;
    static parseHex(hex: string): Color;
    static parseIndex(value: number, channels?: number): Color;
    static fromRGB(red: number, green: number, blue: number, alpha?: number): Color;
    static fromHSL(hue: number, saturation: number, lightness: number, alpha?: number): Color;
    static isColor(arg: unknown): arg is Color;
}

declare type ColorChannel = typeof colorChannels[number];

declare const colorChannels: readonly ["red", "green", "blue", "alpha"];

declare type ColorFormatter = (color: Color, vm?: IColorpicker) => string;

declare type ColorParser = (color: string | Rgb, vm?: IColorpicker) => Color;

export declare const Colorpicker: {
    install(Vue: App): void;
};

declare interface ConfigComponent {
    getOptions(): BuefyConfigOptions;
    setOptions(options: BuefyConfigOptions): void;
}

export declare const ConfigProgrammatic: ConfigComponent;

declare const CONTROL_OPERATIONS: readonly ["plus", "minus"];

declare type ControlOperation = typeof CONTROL_OPERATIONS[number];

declare const CONTROLS_ALIGNMENTS: readonly ["left", "right", "center"];

declare type ControlsAlignment = typeof CONTROLS_ALIGNMENTS[number];

export declare function copyAppContext(src: App, dest: App): void;

export declare function createAbsoluteElement(el: Element): HTMLElement;

export declare function createNewEvent(eventName: string): Event;

declare type CustomFormatter = (value: number) => string;

declare type CustomSearchFunction = (row: TableRow, input: string | number) => boolean;

declare type CustomSortFunction = TableColumnOrder['customSort'];

declare interface DataItem {
    group?: string;
    items: any[];
}

declare type DateFormatter = (date: Date | Date[], vm: IDatepicker) => string;

declare type DateParser = (date: string, vm: IDatepicker) => Date | null;

export declare const Datepicker: {
    install(Vue: App): void;
};

declare interface DatepickerEvent {
    type: string;
    date: Date;
}

declare type DateSelector = (day: Date) => boolean;

declare type DatetimeCreator = (date: Date) => Date;

declare type DatetimeFormatter = (date: Date) => string;

declare type DatetimeParser = (date: string) => Date | null;

export declare const Datetimepicker: {
    install(Vue: App): void;
};

declare type DeepPartial<T> = {
    [K in keyof T]?: DeepPartial<T[K]>;
};

export declare const Dialog: {
    install(Vue: App): void;
};

declare type DialogInstance = InstanceType<typeof BDialog>;

export declare type DialogOpenParams = Omit<DialogProps, 'programmatic' | 'cancelCallback' | 'confirmCallback'> & {
    onConfirm?: (value: string, dialog: DialogInstance) => void;
    onCancel?: (method: ModalCancellableOption) => void;
};

export declare class DialogProgrammatic {
    private app;
    constructor(app?: App);
    alert(params: string | DialogOpenParams): Promise<unknown> | DialogProgrammaticInstance;
    confirm(params: DialogOpenParams): Promise<unknown> | DialogProgrammaticInstance;
    prompt(params: DialogOpenParams): Promise<unknown> | DialogProgrammaticInstance;
}

declare type DialogProgrammaticInstance = ComponentPublicInstance<{}, // P
    {}, // B
    {}, // D
    {}, // C
    {
    close: () => void;
}>;

declare type DialogProps = ExtractComponentProps<typeof BDialog>;

declare const DISPLAY_FORMATS: readonly ["raw", "percent"];

declare type DisplayFormat = typeof DISPLAY_FORMATS[number];

export declare const Dropdown: {
    install(Vue: App): void;
};

export declare type ExtractComponentData<T> = T extends {
    new (...args: any[]): infer U;
} ? U extends {
    $data: infer D;
} ? {
    [Key in keyof D]?: D[Key];
} : Record<string, never> : Record<string, never>;

export declare type ExtractComponentProps<T> = T extends {
    new (...args: any[]): infer U;
} ? U extends {
    $props: infer P;
} ? {
    -readonly [Key in keyof P]?: P[Key];
} : Record<string, never> : Record<string, never>;

declare type FeatureFlags = 0 | typeof Items | typeof Sorted;

declare type FeatureFlags_2 = 0 | typeof Sorted_2 | typeof Optional;

export declare const Field: {
    install(Vue: App): void;
};

export declare type FieldLabelPosition = 'inside' | 'on-border';

declare type FieldMessageProp = FieldMessagePropItem | FieldMessagePropItem[];

declare type FieldMessagePropItem = string | Record<string, string>;

declare type FieldTypeProp = string | Record<string, boolean>;

declare type FiltersChangeHandler = (filters: Record<string, string | number>) => void;

declare interface FocusedDate {
    year: number;
    month: number;
    day?: number;
}

export declare function getComponentFromVNode(vnode: VNode): ComponentPublicInstance | Record<string, any> | null | undefined;

export declare function getValueByPath(obj: any, path: string): any;

declare const HOUR_FORMAT_12 = "12";

declare const HOUR_FORMAT_24 = "24";

declare type HourFormat = typeof HOUR_FORMAT_24 | typeof HOUR_FORMAT_12;

declare interface ICarousel extends ProviderParent {
    animated: string;
    transition?: string;
    activeChildIndex: number;
}

declare interface ICarouselItem extends InjectedChild {
    isActive: boolean;
    $emit: (event: 'click') => void;
}

declare type IColorpicker = Omit<DefineComponent<{}, // P(rops)
    {}, // B (raw bindings)
    {}, // D(ata)
    {}, // C(omputed)
    {}>, '$emit'>;

export declare const Icon: {
    install(Vue: App): void;
};

export declare interface IconPack {
    sizes: Record<string, string | null>;
    iconPrefix?: string;
}

declare type IDatepicker = ComponentPublicInstance<{
    multiple?: boolean;
}, // P(rops)
    {}, // B (raw bindings)
    {}, // D(ata)
    {
    isTypeMonth: () => boolean;
    dtf: () => Intl.DateTimeFormat;
    dtfMonth: () => Intl.DateTimeFormat;
}, // C(omputed)
    {}, // M(ethods)
    {
    'week-number-click': (_week: number, _year: number) => boolean;
}>;

declare const Image_2: {
    install(Vue: App): void;
};
export { Image_2 as Image }

declare type IMenuItem = ComponentPublicInstance<{}, // P(rops)
    {}, // B (raw bindings)
    {
    _isMenu?: boolean;
    menuItems: IMenuItem[];
    newExpanded: boolean;
    newActive: boolean;
}, {}, // C(omputed)
    {
    appendMenuItem: (item: IMenuItem) => void;
    removeMenuItem: (item: IMenuItem) => void;
}, // M(ethods)
    {
    'update:modelValue': (_isActive: boolean) => boolean;
    'update:expanded': (_isExpanded: boolean) => boolean;
}> & {
    parent?: unknown;
};

declare const INDICATOR_MODES: readonly ["hover", "click"];

declare type IndicatorMode = typeof INDICATOR_MODES[number];

declare interface InjectedChild {
    uniqueValue: string | number;
    index: number;
    dynamicIndex?: number;
}

declare type InjectedChildMixin<Flags extends FeatureFlags_2, Parent extends ProviderParent> = DefineComponent<InjectedChildMixinPropOptions<Flags>, // PropsOrPropOptions
    {}, // RawBindings
InjectedChildMixinData<Flags, Parent>, InjectedChildMixinComputed<Flags>, {}>;

declare type InjectedChildMixinComputed<Flags extends FeatureFlags_2, IsSorted extends boolean = Flags extends typeof Sorted_2 ? true : false> = {
    uniqueValue(): string | number;
} & (IsSorted extends true ? {
    index(): number;
} : {});

declare type InjectedChildMixinData<Flags extends FeatureFlags_2, Parent extends ProviderParent, IsSorted = Flags extends typeof Sorted_2 ? true : false, IsOptional = Flags extends typeof Optional ? true : false> = (IsSorted extends true ? {
    dynamicIndex?: number;
} : {}) & (IsOptional extends true ? {
    parent: Parent | '';
} : {
    parent: Parent;
});

declare type InjectedChildMixinPropOptions<Flags extends FeatureFlags_2, IsSorted = Flags extends typeof Sorted_2 ? true : false> = {
    value: {
        type: PropType<string | null>;
        default: null;
    };
} & (IsSorted extends true ? {
    order: PropType<number>;
} : {});

export declare const Input: {
    install(Vue: App): void;
};

export declare function isCustomElement(vm: Pick<ComponentPublicInstance, '$root'>): boolean;

export declare const isDefined: <T>(d: T | undefined) => d is T;

export declare function isFragment(vnode: VNode): boolean;

declare type ISlider = ComponentPublicInstance<{
    disabled: boolean;
    min: number;
    max: number;
    step: number;
    precision: number;
}, // P(rops)
    {}, // B (raw bindings)
    {
    _isSlider: true;
}, // D(ata)
    {}, // C(omputed)
    {
    sliderSize: () => number;
    emitValue: (event: 'change' | 'dragging' | 'update:modelValue') => void;
}>;

export declare function isTag(vnode: VNode): boolean;

declare interface IStepItem extends TabbedChild {
    type?: VueClassAttribute;
    step?: number | string;
    clickable?: boolean;
}

export declare function isVueComponent(c: unknown): c is ComponentPublicInstance;

export declare interface ITableColumn extends Omit<TableColumnProps, 'thAttrs' | 'tdAttrs'> {
    thAttrs: (column: ITableColumn) => Record<string, any> | null;
    tdAttrs: (row: TableRow, column: ITableColumn) => Record<string, any> | null;
    newKey?: string | number;
    _isTableColumn?: boolean;
    thClasses?: VueClassAttribute;
    thStyle?: StyleValue_2;
    thWrapStyle?: StyleValue_2;
    style?: StyleValueUnit;
    getRootClasses: (row: TableRow) => VueClassAttribute[];
    getRootStyle: (row: TableRow) => StyleValue_2;
    $slots: Slots;
}

declare const Items = 1;

declare type ItemValueType = any;

declare interface ITimepickerMixin {
    hourFormat?: HourFormat;
    timeCreator: TimeCreator;
    enableSeconds?: boolean;
    computedValue: Date | null | undefined;
    dtf: Intl.DateTimeFormat;
    amString: string;
    pmString: string;
}

declare const LABEL_POSITIONS: readonly ["bottom", "right", "left"];

declare type LabelPosition = typeof LABEL_POSITIONS[number];

export declare const Loading: {
    install(Vue: App): void;
};

export declare type LoadingOpenParams = Omit<LoadingProps, 'programmatic'>;

export declare class LoadingProgrammatic {
    private app;
    constructor(app?: App);
    open(params: LoadingOpenParams): LoadingProgrammaticInstance;
}

declare type LoadingProgrammaticInstance = ComponentPublicInstance<{}, // P
    {}, // B
    {}, // D
    {}, // C
    {
    close: () => void;
}>;

declare type LoadingProps = ExtractComponentProps<typeof BLoading>;

export declare const Menu: {
    install(Vue: App): void;
};

declare type MenuInstance = InstanceType<typeof BMenu>;

declare type MenuItemContainer = Omit<ComponentPublicInstance<{}, // P(rops)
    {}, // B (raw bindings)
    {
    _isMenu?: boolean;
    menuItems: IMenuItem[];
}, // D(ata)
    {}, // C(omputed)
    {
    appendMenuItem: (item: IMenuItem) => void;
    removeMenuItem: (item: IMenuItem) => void;
}, // M(ethods)
    {}>, '$emit'> & {
    parent?: unknown;
};

export declare const merge: <T>(target: { [K in keyof T]: T[K]; }, source: DeepPartial<T>, deep?: boolean) => { [K in keyof T]: T[K]; };

export declare const Message: {
    install(Vue: App): void;
};

declare const MOBILE_MODES: readonly ["minimalist", "compact"];

declare type MobileMode = typeof MOBILE_MODES[number];

export declare const Modal: {
    install(Vue: App): void;
};

declare const MODAL_ARIA_ROLES: readonly ["dialog", "alertdialog"];

declare const MODAL_SCROLLS: readonly ["clip", "keep"];

declare type ModalAriaRole = typeof MODAL_ARIA_ROLES[number];

export declare type ModalCancellableOption = 'escape' | 'x' | 'outside' | 'button';

export declare type ModalOpenParams = Omit<ModalProps, 'programmatic' | 'cancelCallback'> & {
    onCancel?: (method: ModalCancellableOption) => void;
};

export declare class ModalProgrammatic {
    private app;
    constructor(app?: App);
    open(params: ModalOpenParams | string): ModalProgrammaticInstance;
}

declare type ModalProgrammaticInstance = ComponentPublicInstance<{}, // P
    {}, // B
    {}, // D
    {}, // C
    {
    close: () => void;
}>;

declare type ModalProps = ExtractComponentProps<typeof BModal>;

declare type ModalScroll = typeof MODAL_SCROLLS[number];

export declare type ModalScrollOption = 'clip' | 'keep';

declare type ModelValue = any;

export declare interface ModifierKeys {
    shiftKey: boolean;
    altKey: boolean;
    ctrlKey: boolean;
}

declare interface MonthInfo {
    name: string;
    index: number;
    disabled: boolean;
}

export declare function multiColumnSort<T>(inputArray: Record<string, T>[], sortingPriority: MultiColumnSortPriority<T>[]): Record<string, T>[];

export declare interface MultiColumnSortPriority<T> {
    field?: string;
    order: 'asc' | 'desc';
    customSort?: (a: Record<string, T>, b: Record<string, T>, isAscending: boolean) => number;
}

declare const NATIVE_TYPES: readonly ["button", "submit", "reset"];

export declare const Navbar: {
    install(Vue: App): void;
};

declare type NavbarItemParent = ComponentPublicInstance<{}, // P(rops)
    {}, // B (raw bindings)
    {
    [key: string]: any;
}, // D(ata)
    {}, // C(omputed)
    {
    closeMenu: () => void;
}>;

export declare const NOTICE_POSITIONS: readonly ["is-top-right", "is-top", "is-top-left", "is-bottom-right", "is-bottom", "is-bottom-left"];

export declare type NoticePosition = typeof NOTICE_POSITIONS[number];

declare const Notification_2: {
    install(Vue: App): void;
};
export { Notification_2 as Notification }

declare const NotificationNotice: DefineComponent<    {}, {}, {
newDuration: number;
}, {}, {
close(): void;
}, DefineComponent<    {
type: {
type: StringConstructor;
default: string;
};
message: PropType<string | string[]>;
duration: NumberConstructor;
queue: {
type: BooleanConstructor;
default: undefined;
};
indefinite: {
type: BooleanConstructor;
default: boolean;
};
pauseOnHover: {
type: BooleanConstructor;
default: boolean;
};
position: {
type: PropType<NoticePosition>;
default: string;
validator(value: unknown): value is NoticePosition;
};
container: StringConstructor;
}, unknown, {
isActive: boolean;
isPaused: boolean;
parentTop: Element | null;
parentBottom: Element | null;
newContainer: string | null | undefined;
timer: ReturnType<typeof setTimeout> | undefined;
newDuration: number;
}, {
correctParent(): Element;
transition(): {
enter: string;
leave: string;
};
}, {
pause(): void;
removePause(): void;
shouldQueue(): boolean;
click(): void;
close(): void;
timeoutCallback(): void;
showNotice(): void;
setupContainer(): void;
}, ComponentOptionsMixin, ComponentOptionsMixin, {
click: () => true;
close: () => true;
}, string, PublicProps, Readonly<ExtractPropTypes<    {
type: {
type: StringConstructor;
default: string;
};
message: PropType<string | string[]>;
duration: NumberConstructor;
queue: {
type: BooleanConstructor;
default: undefined;
};
indefinite: {
type: BooleanConstructor;
default: boolean;
};
pauseOnHover: {
type: BooleanConstructor;
default: boolean;
};
position: {
type: PropType<NoticePosition>;
default: string;
validator(value: unknown): value is NoticePosition;
};
container: StringConstructor;
}>> & {
onClick?: (() => any) | undefined;
onClose?: (() => any) | undefined;
}, {
type: string;
position: "is-top-right" | "is-top" | "is-top-left" | "is-bottom-right" | "is-bottom" | "is-bottom-left";
queue: boolean;
indefinite: boolean;
pauseOnHover: boolean;
}, {}>, ComponentOptionsMixin, {
close: () => true;
}, string, PublicProps, Readonly<ExtractPropTypes<    {}>> & {
onClose?: (() => any) | undefined;
}, {}, {}>;

declare type NotificationNoticeProps = ExtractComponentProps<typeof NotificationNotice>;

export declare type NotificationOpenParams = Omit<NotificationNoticeProps, 'message'> & Omit<NotificationProps, 'duration' | 'message' | 'modelValue' | 'position' | 'type'> & {
    message?: string | VNode | (string | VNode)[];
    onClose?: () => void;
};

export declare class NotificationProgrammatic {
    private app;
    constructor(app?: App);
    open(params: NotificationOpenParams | string): NotificationProgrammaticInstance;
}

declare type NotificationProgrammaticInstance = ComponentPublicInstance<{}, // P
    {}, // B
    {}, // D
    {}, // C
    {
    close: () => void;
}>;

declare type NotificationProps = ExtractComponentProps<typeof BNotification>;

export declare const Numberinput: {
    install(Vue: App): void;
};

declare const Optional = 2;

export declare const Pagination: {
    install(Vue: App): void;
};

declare interface PaginationPage {
    number: number;
    isCurrent: boolean;
    click: (event: PointerEvent) => void;
    input: (event: Event, inputNum: number | string) => void;
    disabled: boolean;
    class: string;
    'aria-label': string | null;
}

declare interface PaginationPageOptions {
    disabled?: boolean;
    class?: string;
    'aria-label'?: string;
}

export declare const Progress: {
    install(Vue: App): void;
};

declare type ProgressInstance = InstanceType<typeof BProgress>;

declare interface ProviderParent {
    _registerItem(item: InjectedChild): void;
    _unregisterItem(item: InjectedChild): void;
}

declare type ProviderParentMixin<Flags extends FeatureFlags, Child extends InjectedChild> = DefineComponent<{}, // PropsOrPropOptions
    {}, // RawBindings
ProviderParentMixinData<Flags, Child>, // D(ata)
ProviderParentMixinComputed<Flags, Child>, // C(computed)
ProviderParentMixinMethods<Flags, Child>>;

declare type ProviderParentMixinComputed<Flags extends FeatureFlags, Child extends InjectedChild, IsSorted extends boolean = Flags extends typeof Sorted ? true : false> = IsSorted extends true ? {
    sortedItems(): Child[];
} : {};

declare type ProviderParentMixinData<Flags extends FeatureFlags, Child extends InjectedChild, HasItems extends boolean = Flags extends typeof Items | typeof Sorted ? true : false, IsSorted extends boolean = Flags extends typeof Sorted ? true : false> = (HasItems extends true ? {
    childItems: Child[];
} : {}) & (IsSorted extends true ? {
    nextIndex: number;
} : {});

declare type ProviderParentMixinMethods<Flags extends FeatureFlags, Child extends InjectedChild, HasItems extends boolean = Flags extends typeof Items | typeof Sorted ? true : false> = HasItems extends true ? {
    _registerItem(item: Child): void;
    _unregisterItem(item: Child): void;
} : {};

export declare const Radio: {
    install(Vue: App): void;
};

export declare const Rate: {
    install(Vue: App): void;
};

export declare function removeElement(el: Element): void;

declare type Rgb = Omit<Rgba, 'alpha'>;

declare type Rgba = {
    [C in ColorChannel]: number;
};

declare type ScrollBehavior_2 = ModalScrollOption;

export declare const Select: {
    install(Vue: App): void;
};

export declare const setOptions: (options: BuefyConfig) => void;

export declare const setVueInstance: (Vue: App) => void;

export declare const Sidebar: {
    install(Vue: App): void;
};

declare const SIDEBAR_POSITIONS: readonly ["fixed", "absolute", "static"];

declare type SidebarPosition = typeof SIDEBAR_POSITIONS[number];

export declare const sign: (x: number) => number;

export declare const Skeleton: {
    install(Vue: App): void;
};

declare const SKELETON_POSITIONS: string[];

declare type SkeletonPosition = typeof SKELETON_POSITIONS[number];

declare interface SkeletonProps {
    active: boolean;
    animated: boolean;
    width?: number | string;
    height?: number | string;
    circle?: boolean;
    rounded: boolean;
    count: number;
    position: SkeletonPosition;
    size?: string;
}

export declare const Slider: {
    install(Vue: App): void;
};

export declare const Snackbar: {
    install(Vue: App): void;
};

export declare type SnackbarOpenParams = Omit<SnackbarProps, 'message'> & {
    message?: string | VNode | (string | VNode)[];
    onClose?: () => void;
};

export declare class SnackbarProgrammatic {
    app: App | undefined;
    constructor(app?: App);
    open(params: SnackbarOpenParams | string): SnackbarProgrammaticInstance;
}

declare type SnackbarProgrammaticInstance = ComponentPublicInstance<{}, // P
    {}, // B
    {}, // D
    {}, // C
    {
    close: () => void;
}>;

declare type SnackbarProps = ExtractComponentProps<typeof BSnackbar>;

declare const Sorted = 3;

declare const Sorted_2 = 1;

declare type SrcsetFormatter = (src: string, size: number, vm: {
    formatSrcset: (src: string, size: number) => string;
}) => string;

export declare const Steps: {
    install(Vue: App): void;
};

declare type StyleValue_2 = StyleValueUnit | StyleValueUnit[];

declare type StyleValueUnit = string | Record<string, string | undefined> | undefined;

export declare const Switch: {
    install(Vue: App): void;
};

declare type T = any;

declare interface TabbedChild extends InjectedChild {
    visible: boolean;
    disabled?: boolean;
    isActive: boolean;
    label?: string;
    headerClass: VueClassAttribute;
    icon?: string;
    iconPack?: string;
    $slots: Slots;
    activate(oldIndex: number): void;
    deactivate(newIndex: number): void;
}

declare interface TabbedParent extends ProviderParent {
    vertical: boolean;
    animated: boolean;
    animateInitially: boolean;
    animation?: string;
    isTransitioning: boolean;
    destroyOnHide: boolean;
    activeItem: TabbedChild;
}

export declare const Table: {
    install(Vue: App): void;
};

export declare interface TableColumnDragEvent {
    event: DragEvent;
    column: ITableColumn;
    index: number;
}

export declare type TableColumnOrder = MultiColumnSortPriority<TableRow>;

declare interface TableColumnProps {
    label?: string;
    customKey?: string | number;
    field?: string;
    meta?: any;
    width?: string | number;
    numeric?: boolean;
    centered?: boolean;
    searchable?: boolean;
    sortable?: boolean;
    visible?: boolean;
    subheading?: string | number;
    customSort?: CustomSortFunction;
    customSearch?: CustomSearchFunction;
    sticky?: boolean;
    headerSelectable?: boolean;
    headerClass?: string;
    cellClass?: string;
    thAttrs?: (column: ITableColumn) => Record<string, any> | null;
    tdAttrs?: (row: TableRow, column: ITableColumn) => Record<string, any> | null;
}

export declare type TableRow = any;

export declare interface TableRowDragEvent {
    event: DragEvent;
    row: TableRow;
    index: number;
}

export declare const Tabs: {
    install(Vue: App): void;
};

export declare const Tag: {
    install(Vue: App): void;
};

export declare const Taginput: {
    install(Vue: App): void;
};

declare type TimeCreator = () => Date;

declare type TimeFormatter = (date: Date, vm: ITimepickerMixin) => string;

declare type TimeParser = (timeString: string, vm: ITimepickerMixin) => Date | null;

export declare const Timepicker: {
    install(Vue: App): void;
};

export declare const Toast: {
    install(Vue: App): void;
};

export declare type ToastOpenParams = Omit<ToastProps, 'message'> & {
    message?: string | VNode | (string | VNode)[];
    onClose?: () => void;
};

export declare class ToastProgrammatic {
    private app;
    constructor(app?: App);
    open(params: string | ToastOpenParams): ToastProgrammaticInstance;
}

declare type ToastProgrammaticInstance = ComponentPublicInstance<{}, // P
    {}, // B
    {}, // D
    {}, // C
    {
    close: () => void;
}>;

declare type ToastProps = ExtractComponentProps<typeof BToast>;

export declare function toCssWidth(width: number | string | undefined): string | null;

export declare const Tooltip: {
    install(Vue: App): void;
};

declare const TOOLTIP_POSITIONS: readonly ["is-auto", "is-top", "is-bottom", "is-left", "is-right"];

declare type TooltipPosition = typeof TOOLTIP_POSITIONS[number];

declare type TransitionName = 'slide-next' | 'slide-prev' | 'slide-up' | 'slide-down';

export declare const translateTouchAsDragEvent: (event: TouchEvent, options: TranslateTouchAsDragEventOptions) => DragEvent;

export declare interface TranslateTouchAsDragEventOptions {
    type: 'dragstart' | 'dragend' | 'drop' | 'dragover' | 'dragleave';
    target?: Element;
}

declare type U = any;

export declare const Upload: {
    install(Vue: App): void;
};

export declare function useConfigComponent(): ConfigComponent | undefined;

export declare function useDialog(): DialogProgrammatic;

export declare function useLoading(): LoadingProgrammatic;

export declare function useModal(): ModalProgrammatic;

export declare function useNotification(): NotificationProgrammatic;

export declare function useSnackbar(): SnackbarProgrammatic;

export declare function useToast(): ToastProgrammatic;

export declare type VueClassAttribute = (string | Record<string, boolean | undefined> | null | undefined) | (string | Record<string, boolean | undefined> | null | undefined)[];

export declare let VueInstance: App | undefined;

export { }

declare module 'vue' {
    interface ComponentCustomProperties {
        $buefy: {
            config: typeof ConfigComponent;
            globalNoticeInterval?: ReturnType<typeof setTimeout>;
            dialog: DialogProgrammatic;
            loading: LoadingProgrammatic;
            modal: ModalProgrammatic;
            notification: NotificationProgrammatic;
            snackbar: SnackbarProgrammatic;
            toast: ToastProgrammatic;
        };
    }
}
