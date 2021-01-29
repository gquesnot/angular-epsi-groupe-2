import {Component, OnInit, ViewChild} from '@angular/core';
import {AdmintagService} from '../core/services/admintag.service';
import {PageEvent} from '@angular/material/paginator';
import {AdminTagInterface} from '../core/interfaces/adminTag.interface';
import {Observable} from 'rxjs';
import {MatPaginator} from '@angular/material';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  private displayedColumns: string[];
  private dataSource;
  constructor(
    private admintagService: AdmintagService
  ) {
    this.displayedColumns = ['name', 'iteration'];
    admintagService.get().subscribe(adminTag => this.dataSource = adminTag);
  }

  ngOnInit() {
  }

}
