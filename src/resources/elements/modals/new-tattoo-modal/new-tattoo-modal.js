import {bindable} from 'aurelia-framework';
import {BaseModal} from 'utils/base-modal';
import {inject} from 'aurelia-framework';
import {Catalogs} from 'controller/catalogs';
import {Session} from 'utils/session';
import {Tattoo} from 'controller/tattoo';

@inject(Catalogs, Session, Tattoo)
export class newTattooModal extends BaseModal {
  @bindable flash;
  @bindable type = 'tattoo';
  @bindable vote;
  @bindable comment;
  @bindable goPrev;
  @bindable goNext;
  @bindable close;

  constructor(catalogs, session, api) {
    super();
    this.api = api;
    this.styleList = [];
    this.elementList = [];
    this.stylesToShow = [];
    this.currentTatto = {};
    this.session = session;
    this.catalogs = catalogs;
    this.elementsToShow = [];
    this.user = this.session.getCurrentUser();
  }
  
  saveRemoveStyles(element, name) {
    if (!this.searchIndexInObject({styleId: element.id}, this.styleList, this.stylesToShow, name)) {
      this.styleList.push({ styleId: element.id });
      this.stylesToShow.push({ name: element.name, id: element.id });
    }
  }
  
  saveRemoveElements(element, name) {
    if (!this.searchIndexInObject({elementId: element.id}, this.elementList, this.elementsToShow, name)) {
      this.elementList.push({ elementId: element.id });
      this.elementsToShow.push({ name: element.name, id: element.id });
    }
  }
  
  searchIndexInObject(toSearch, arrayToSearch, arrayToShow, name) {
    let result = false;
    let that = this;
    if (arrayToSearch.length > 0) {
      arrayToSearch.forEach(function(item, index) {
        if (name === 'style') {
          if (item.styleId === toSearch.styleId) {
            arrayToSearch.splice(index, 1);
            arrayToShow.splice(index, 1);
            result = true;
          }
        } else if (name === 'element') {
          if (item.elementId === toSearch.elementId) {
            arrayToSearch.splice(index, 1);
            arrayToShow.splice(index, 1);
            result = true;
          }
        }
      });
    } else {
      result = false;
    }
    return result;
  }
  
  attached() {
    this.styles = this.catalogs.getStyles();
    this.elements = this.catalogs.getElements();
    this.bodyParts = this.catalogs.getBodyPart();
    this.artists = this.session.getStudioFreelancer().artist;
  }
  
  submit() {
    //TODO Change artist and for endpoint - Pending Back
    let data = new FormData();
    data.append("name", this.currentTatto.name);
    data.append("artist", this.currentTatto.artist);
    data.append("partbody", this.currentTatto.partbody);
    data.append("styles", JSON.stringify(this.styleList));
    data.append("elements", JSON.stringify(this.elementList));
    data.append("dimensionsX", this.currentTatto.dimensionsX);
    data.append("dimensionsY", this.currentTatto.dimensionsY);
    data.append("image", document.querySelector('#photo-preview').files[0]);
    this.api.add(data)
      .then(response => {
        window.location.reload(true);
      })
      .catch(response => {
        this.error = response;
      });
  }
}
