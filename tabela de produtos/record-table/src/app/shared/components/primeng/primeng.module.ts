import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccordionModule } from 'primeng/accordion';
import { AutoFocusModule } from 'primeng/autofocus';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MenuModule } from 'primeng/menu';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { PanelModule } from 'primeng/panel';
import { PickListModule } from 'primeng/picklist';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { RippleModule } from 'primeng/ripple';
import { SidebarModule } from 'primeng/sidebar';
import { SkeletonModule } from 'primeng/skeleton';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';

import { ConfirmationService, MessageService } from 'primeng/api';
import {
  DialogService,
  DynamicDialogRef,
  DynamicDialogConfig,
} from 'primeng/dynamicdialog';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { CarouselModule } from 'primeng/carousel';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AccordionModule,
    AutoFocusModule,
    BadgeModule,
    ButtonModule,
    CalendarModule,
    CardModule,
    CheckboxModule,
    ConfirmDialogModule,
    ContextMenuModule,
    DialogModule,
    DividerModule,
    DropdownModule,
    DynamicDialogModule,
    InputMaskModule,
    InputNumberModule,
    InputSwitchModule,
    InputTextModule,
    InputTextareaModule,
    MenuModule,
    MessageModule,
    MessagesModule,
    OverlayPanelModule,
    PanelModule,
    PickListModule,
    RadioButtonModule,
    RatingModule,
    RippleModule,
    SidebarModule,
    SkeletonModule,
    SplitButtonModule,
    TableModule,
    ToastModule,
    ToolbarModule,
    TooltipModule,
    CarouselModule,
  ],
  exports: [
    AccordionModule,
    AutoFocusModule,
    BadgeModule,
    ButtonModule,
    CalendarModule,
    CardModule,
    CheckboxModule,
    ConfirmDialogModule,
    ContextMenuModule,
    DialogModule,
    DividerModule,
    DropdownModule,
    DynamicDialogModule,
    InputMaskModule,
    InputNumberModule,
    InputSwitchModule,
    InputTextModule,
    InputTextareaModule,
    MenuModule,
    MessageModule,
    MessagesModule,
    OverlayPanelModule,
    PanelModule,
    PickListModule,
    RadioButtonModule,
    RatingModule,
    RippleModule,
    SidebarModule,
    SkeletonModule,
    SplitButtonModule,
    TableModule,
    ToastModule,
    ToolbarModule,
    TooltipModule,
    CarouselModule,
  ],
  providers: [
    ConfirmationService,
    DialogService,
    DynamicDialogRef,
    DynamicDialogConfig,
    MessageService,
  ],
})
export class PrimengModule {}
