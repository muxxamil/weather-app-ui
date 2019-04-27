import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './pages.routing';
import { Pages } from './pages.component';

// Services
// import {
//   PaymentModeService, LeadPayModeService, LeadService, AreaUnitService, CityService,
//   CountryService, ProjectService,InventoryService,
//   SourceService, ClassificationService, ClientService, CurrencyService,
//   DesignationService, AllocationsService, UserRelationService, LeadSourceService,
//   PropertyTypesService, LandUnitsService, UserService, NotificationAndAlertService,
//   StaffManagementService, TeamsService, TargetsService, TasksService, StaffListService,
//   AffiliatesService, PurposeService, CategoriesService, ClientAccessListService, MapboxService,
//   BlockedUserService, UserRosterService, UnitService, PaymentService, DashboardService, AnnouncementService, InvoiceService,
//   AnnouncementSocketService, AssessmentService, MachineService, AttachmentService
// } from '../../services';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [Pages],
  providers: [
  ]
})
export class PagesModule {
}
