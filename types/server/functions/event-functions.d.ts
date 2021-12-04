/// <reference path='../classes/MTAElement.d.ts' />

declare function addEvent(): void;
declare function addEventHandler(eventName: string, attachedTo: MTAElement, handler: Function, propagate?: boolean, priority?: string): void;
declare function cancelEvent(): void;
declare function cancelLatentEvent(): void;
declare function getCancelReason(): void;
declare function getEventHandlers(): void;
declare function getLatentEventHandles(): void;
declare function getLatentEventStatus(): void;
declare function removeEventHandler(): void;
declare function triggerEvent(): void;
declare function triggerClientEvent(): void;
declare function triggerLatentClientEvent(): void;
declare function wasEventCancelled(): void;