
import html, {riskHtmlMapper} from '../../templates/helpers';

const template = (context) => {
  return context.api.getRiskFactors(context.patient.age).then((risks) => {
    return html`
        <h5 class="card-title">Please select all that apply to you.</h5>
        <div class="card-text">
          <form>
            ${riskHtmlMapper(risks, context.commonRiskFactors)}
          </form>
        </div>
      `;
  });
};

export default template;
