
import View from '../../base/view';
import template from './template';

export default class AnalysisReportView extends View {
  constructor(el, context) {
    const getExplanationMarkup = (data) => {
      let supporting = '';
      let conflicting = '';

      if (data.supporting_evidence || data.conflicting_evidence) {
        for (const e of data.supporting_evidence) {
          supporting += `<li><i class="text-success fa fa-fw fa-plus-circle"></i> ${e.common_name}</li>`;
        }
        for (const e of data.conflicting_evidence) {
          conflicting += `<li><i class="text-danger fa fa-fw fa-minus-circle"></i> ${e.common_name}</li>`;
        }

        const base = `
          <div class="row">
            <div class="col-6">
              <span class="badge badge-success"><i class="fa fa-fw fa-thumbs-up"></i>Evidence for</span>
              <ul class="list-unstyled">
                ${supporting}
              </ul>
            </div>
            <div class="col-6">
              <span class="badge badge-danger"><i class="fa fa-fw fa-thumbs-down"></i>Evidence against</span>
              <ul class="list-unstyled">
                ${conflicting}
              </ul>
            </div>
          </div>
         `;
        return base;
      }
      return 'The maximum size of evidence reached.';
    };

    const handleExplainRequested = (e) => {
      e.preventDefault();
      const {id} = e.target.dataset;
      const el = e.target.parentNode.parentNode.querySelector('.explanation');

      if (!el.innerHTML) {
        el.innerHTML = '<i class="fa fa-circle-o-notch fa-spin fa-fw"></i> one second..';
        context.api.explain(Object.assign(context.patient.toDiagnosis(), {target: id})).then((data) => {
          el.innerHTML = getExplanationMarkup(data);
          return el.innerHTML;
        });
      } else {
        el.innerHTML = '';
      }
    };

    const binds = {
      '.explain': {
        type: 'click',
        listener: handleExplainRequested
      }
    };

    super(el, template, context, binds);
  }
}
