import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private apiService:ApiService) { }
  getAllCategories(){
    return this.apiService.get('Category')
  }
}
