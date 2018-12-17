import React, { Component } from 'react';
import StudyListRow from './StudyListRow';
import './StudyList.styl';
import StudylistToolbar from './StudyListToolbar';

class StudyList extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.getChangeHandler = this.getChangeHandler.bind(this);
  }

  getChangeHandler(key) {
    return event => {
      const obj = {};
      obj[key] = event.target.value;
      this.setState(obj);
    };
  }

  onInputKeydown(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      event.stopPropagation();
      this.props.onSearch(this.state);
    }
  }

  render() {
    return (
      <div className="StudyList">
        <div className="studyListToolbar clearfix">
          <div className="header pull-left">Study List</div>
          <div className="studyCount pull-right">
            {this.props.numberOfStudies}
          </div>
          <div className="pull-right">
            {
              <StudylistToolbar
                studyListFunctionsEnabled={this.props.studyListFunctionsEnabled}
                onImport={this.props.onImport}
              />
            }
          </div>
        </div>
        <div className="theadBackground" />
        <div id="studyListContainer">
          <table id="tblStudyList" className="studylistResult table noselect">
            <thead>
              <tr>
                <th className="patientName">
                  <div id="_patientName" className="sortingCell">
                    <span>Patient Name</span>
                    <i className="{{sortingColumnsIcons.patientName}}">
                      &nbsp;
                    </i>
                  </div>
                  <input
                    type="text"
                    className="form-control studylist-search"
                    id="patientName"
                    value={this.state.patientName}
                    onKeyDown={this.onInputKeydown.bind(this)}
                    onChange={this.getChangeHandler('patientName')}
                  />
                </th>
                <th className="patientId">
                  <div id="_patientId" className="sortingCell">
                    <span>MRN</span>
                    <i className="{{sortingColumnsIcons.patientId}}">&nbsp;</i>
                  </div>
                  <input
                    type="text"
                    className="form-control studylist-search"
                    id="patientId"
                    value={this.state.patientId}
                    onKeyDown={this.onInputKeydown.bind(this)}
                    onChange={this.getChangeHandler('patientId')}
                  />
                </th>
                <th className="accessionNumber">
                  <div id="_accessionNumber" className="sortingCell ">
                    <span>Accession #</span>
                    <i className="{{sortingColumnsIcons.accessionNumber}}">
                      &nbsp;
                    </i>
                  </div>
                  <input
                    type="text"
                    className="form-control studylist-search"
                    id="accessionNumber"
                    value={this.state.accessionNumber}
                    onKeyDown={this.onInputKeydown.bind(this)}
                    onChange={this.getChangeHandler('accessionNumber')}
                  />
                </th>
                <th className="studyDate">
                  <div id="_studyDate" className="sortingCell">
                    <span>Study Date</span>
                    <i className="{{sortingColumnsIcons.studyDate}}">&nbsp;</i>
                  </div>
                  <input
                    type="text"
                    className="form-control studylist-search"
                    name="daterange"
                    id="studyDate"
                    value={this.state.studyDateRange}
                    onChange={this.getChangeHandler('studyDateRange')}
                  />
                </th>
                <th className="modalities">
                  <div id="_modalities" className="sortingCell">
                    <span>Modality</span>
                    <i className="{{sortingColumnsIcons.modalities}}">&nbsp;</i>
                  </div>
                  <input
                    type="text"
                    className="form-control studylist-search"
                    id="modality"
                    onKeyDown={this.onInputKeydown.bind(this)}
                    value={this.state.modality}
                    onChange={this.getChangeHandler('modality')}
                  />
                </th>
                <th className="studyDescription">
                  <div id="_studyDescription" className="sortingCell">
                    <span>Study Description</span>
                    <i className="{{sortingColumnsIcons.studyDescription}}">
                      &nbsp;
                    </i>
                  </div>
                  <input
                    type="text"
                    className="form-control studylist-search"
                    id="studyDescription"
                    onKeyDown={this.onInputKeydown.bind(this)}
                    value={this.state.studyDescription}
                    onChange={this.getChangeHandler('studyDescription')}
                  />
                </th>
              </tr>
            </thead>
            <tbody id="studyListData">
              {this.props.studies.map(study => {
                return (
                  <StudyListRow key={study.studyInstanceUID} study={study} />
                );
              })}
            </tbody>
          </table>
          {/*{>paginationArea instance.paginationData}*/}
          {/*{#if session "showLoadingText"}*/}
          {/*{>loadingText}*/}
          {/*{else}*/}
          {/*{#if session "serverError"}*/}
          <div className="notFound">There was an error fetching studies</div>
          {/*{else}*/}
          {/*{#unless numberOfStudies}*/}
          <div className="notFound">No matching results</div>
          {/*{/unless}*/}
          {/*{/if}*/}
          {/*{/if}*/}
        </div>
      </div>
    );
  }
}

export default StudyList;
