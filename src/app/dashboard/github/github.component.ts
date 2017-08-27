import { Component, OnInit } from '@angular/core';
import {routerTransition} from '../router.transition';
import {Http} from '@angular/http';
import {GithubEntry} from './github-entry.model';
import 'prismjs/themes/prism.css';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css'],
  animations: [routerTransition()]
})
export class GithubComponent implements OnInit {

  private readonly gitUser: string = 'codepleb';

  gitProjects: GithubEntry[];
  content: string;

  selectedGitEntry; GithubEntry;

  constructor(private http: Http) {
    this.content = '';
  }

  ngOnInit() {
    this.http.get('https://api.github.com/users/codepleb/repos').subscribe(
      res => {
        this.gitProjects = res.json() as GithubEntry[];
        this.selectedGitEntry = this.gitProjects[0];
      }
    );
  }

  onSelectEntry(newSelect: GithubEntry) {
    this.selectedGitEntry = newSelect;

    this.http.get('https://api.github.com/repos/' + this.gitUser + '/' + newSelect.name + '/readme').subscribe(
      result => this.content = atob(result.json().content),
      error => this.content = '##### No readme.md found for this project...'
    );
  }

}
