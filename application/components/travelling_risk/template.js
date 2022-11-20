
import html, {riskHtmlMapper} from '../../templates/helpers';

const template = (context) => {
  return context.api.getRiskFactors(context.patient.age).then((risks) => {
    return html`
      <h5 class="card-title">Please select where you live or have recently traveled to.</h5>
      <div class="card-text">
        <form>
          ${riskHtmlMapper(risks, context.locationRiskFactors)}
        </form>
      </div>
    `;
  });
};

export default template;
