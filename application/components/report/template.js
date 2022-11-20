// import {jsPDF} from 'jspdf';

import html from '../../templates/helpers';

// const doc = new jsPDF();

const conditionsHtmlMapper = (conditions) => {
  return conditions.map((condition) => `
    <div class="summary-item row">
      <div class="col-8">
        ${condition.name}
        ${condition.probability >= 0.2
    ? `<i class="fa fa-fw fa-eye"></i><a href data-id="${condition.id}" class="explain text-white">explain</a>` : ''}
      </div>
      <div class="col-4">
        <div class="progress">
          <div class="progress-bar bg-info" role="progressbar" 
              style="width: ${Math.floor(condition.probability * 100)}%">
            ${Math.floor(condition.probability * 100)}%
          </div>
        </div>
      </div>
      <div class="explanation col-12"></div>
    </div>          
  `);
};

const template = (context) => {
  return context.api.diagnosis(context.patient.toDiagnosis()).then((data) => {
    // data.conditions.map((condition) => {
    //   doc.text(condition.name);
    //   doc.text(condition.probability);
    //   return ;
    // })
    return html`
      <h5 class="card-title"> Diagnosis Report</h5>
      <div class="card-text">
        <p>Based on the interview, you could suffer from:</p>
        ${conditionsHtmlMapper(data.conditions)}
      </div>
    `;
  });
};

export default template;
