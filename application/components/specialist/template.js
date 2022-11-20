
import _ from 'lodash';
import html from '../../templates/helpers';


const template = (context) => {
  return context.api.getSpecialist(context.data).then((suggestedSpecialist) => {
    if (!suggestedSpecialist.length) {
      document.getElementById('next-step').click();
      return '<p><i class="fa fa-circle-o-notch fa-spin fa-fw"></i> Figuring out... </p>';
    }
    console.log(suggestedSpecialist)
    return html`
      <h1>Hello </h1>
    `;
  });
};

export default template;
