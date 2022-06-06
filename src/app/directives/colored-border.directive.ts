import {Directive, ElementRef, Input, OnChanges, SimpleChanges} from '@angular/core';

export enum Position {
  top,
  bottom
}
export const Top = Position.top;
export const Bottom = Position.bottom;

export interface appColoredEdge {
  color?: string,
  position?: Position
  width: number;
}

@Directive({
  selector: '[appColoredEdge]'
})
export class ColoredEdge implements OnChanges {
  @Input()
  appColoredEdge!: appColoredEdge;

  constructor(private el: ElementRef) {

  }

  ngOnChanges(changes: SimpleChanges): void {
    const {appColoredEdge: {currentValue: edgeSettings}} = changes;
    const elementStyle = this.el.nativeElement.style;

    if (!edgeSettings.color) {
      edgeSettings.color = '#FF5722'
    }
    if (!edgeSettings.position) {
      edgeSettings.position = Position.top
    }

    if (edgeSettings.position === Position.top) {
      elementStyle.borderTopColor = edgeSettings.color;
      elementStyle.borderTopWidth = `${edgeSettings.width}px`;
      elementStyle.borderTopStyle = 'solid'
    } else {
      elementStyle.borderBottomColor = edgeSettings.color;
      elementStyle.borderBottomWidth = `${edgeSettings.width}px`;
      elementStyle.borderBottomStyle = 'solid'
    }

    this.el.nativeElement.backgroundColor = 'orange';
  }
}
