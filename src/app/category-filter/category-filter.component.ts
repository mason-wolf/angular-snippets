import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-category-filter',
  templateUrl: './category-filter.component.html',
  styleUrls: ['./category-filter.component.css']
})
export class CategoryFilterComponent implements OnInit {

  categoryForm: FormGroup;

  aircraftCategories = [
    "Fighter",
    "Bomber",
    "Transport",
    "Surveillance"
  ];

  selectedCategories: any[] = [];

  aircraftData = [
    { id: 1, type: "Fighter", name: "F-16 Fighting Falcon", description: "The F-16 is a single-engine, highly maneuverable, supersonic, multi-role tactical fighter aircraft. It is much smaller and lighter than its predecessors but uses advanced aerodynamics and avionics, including the first use of a relaxed static stability/fly-by-wire (RSS/FBW) flight control system, to achieve enhanced maneuver performance.", img_url: "https://upload.wikimedia.org/wikipedia/commons/1/15/F16A_FAP_linksup_KC-10.jpg"},
    { id: 2, type: "Bomber", name: "B-52 Stratofortress", description: "The Boeing B-52 Stratofortress is an American long-range, subsonic, jet-powered strategic bomber. The B-52 was designed and built by Boeing, which has continued to provide support and upgrades. It has been operated by the United States Air Force (USAF) since the 1950s. The bomber is capable of carrying up to 70,000 pounds (32,000 kg) of weapons, and has a typical combat range of around 8,800 miles (14,080 km) without aerial refueling.", img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/B-52_Stratofortress_assigned_to_the_307th_Bomb_Wing_%28cropped%29.jpg/1920px-B-52_Stratofortress_assigned_to_the_307th_Bomb_Wing_%28cropped%29.jpg"},
    { id: 3, type: "Transport", name: "Lockheed C-130 Hercules", description: "The Lockheed C-130 Hercules is an American four-engine turboprop military transport aircraft designed and built by Lockheed (now Lockheed Martin). Capable of using unprepared runways for takeoffs and landings, the C-130 was originally designed as a troop, medevac, and cargo transport aircraft", img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Lockheed_C-130_Hercules.jpg/1920px-Lockheed_C-130_Hercules.jpg"},
    { id: 4, type: "Surveillance", name: "General Atomics MQ-9 Reaper", description: "The General Atomics MQ-9 Reaper (sometimes called Predator B) is an unmanned aerial vehicle (UAV) capable of remotely controlled or autonomous flight operations developed by General Atomics Aeronautical Systems (GA-ASI) primarily for the United States Air Force (USAF). The MQ-9 and other UAVs are referred to as Remotely Piloted Vehicles/Aircraft (RPV/RPA) by the USAF to indicate their human ground controllers.", img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/MQ-9_Reaper_UAV_%28cropped%29.jpg/1920px-MQ-9_Reaper_UAV_%28cropped%29.jpg"}
  ];

  displayedAircraft: any[] = [];

  constructor(private formBuilder: FormBuilder) {
      this.categoryForm = this.formBuilder.group({});

      this.aircraftCategories.forEach(category => {
        this.populateCategories(category);
      });

      this.aircraftData.forEach(aircraft => {
        this.selectedCategories.push(aircraft.type);
      });

      this.filterByCategory();
   }

   populateCategories(category: string) {
    this.categoryForm.addControl(category, new FormControl(true));
   }

   filterByCategory() {

    this.displayedAircraft = [];
    // Check which categories are selected.
    Object.keys(this.categoryForm.value).forEach(key => {
      let category = key;
      let showCategory = this.categoryForm.value[key as any];

      if (showCategory == false) {
        // Remove category if checkbox is toggled off.
        this.selectedCategories = this.selectedCategories.filter(function (str) { return str.indexOf(category) === -1; });
      }
      else {
        if (!this.selectedCategories.includes(category)) {
          this.selectedCategories.push(category);
        }
      }
    });

    // Add the selected aircraft by type.
    this.selectedCategories.forEach(category => {
      this.aircraftData.forEach(aircraft => {
        if (category == aircraft.type && !this.displayedAircraft.includes(aircraft)) {
          this.displayedAircraft.push(aircraft);
        }
      });
    });

    if (this.selectedCategories.length == 0) {
      this.displayedAircraft = [];
    }

    // Sort by aircraft type.
    this.displayedAircraft.sort((a, b) => a.type.normalize().localeCompare(b.type.normalize()));
   }

    selectAll() {
      Object.keys(this.categoryForm.controls).forEach((key) => {
        this.categoryForm.controls[key].setValue(true);
      });;
      this.filterByCategory();
    }

    selectNone() {
      Object.keys(this.categoryForm.controls).forEach((key) => {
        this.categoryForm.controls[key].setValue(false);
      });;
      this.filterByCategory();
    }
    ngOnInit(): void {
    }

}
