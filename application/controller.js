import Controller from './base/controller';
import LandingView from './components/landing_page/view';
import FirstView from './components/first/view';
import RecommendationView from './components/recommendation/view';
import NaturalLanguageProcessing from './components/natural_language_processing/view';
import TravellingView from './components/travelling_risk/view';
import FamiliarView from './components/familiar_risk/view';
import InquiringView from './components/inquire/view';
import AnalysisReportView from './components/report/view';

export default class DemoController extends Controller {
  constructor(el) {
    super(el);
    this.viewMapper = {
      landing: LandingView,
      first_view: FirstView,
      recommendation: RecommendationView,
      naturallangugaeprocessing: NaturalLanguageProcessing,
      travelling_risk: TravellingView,
      familiar_risk: FamiliarView,
      inquired: InquiringView,
      analysis_report: AnalysisReportView
    };
  }

  beforeSetView(name) {
    const ViewClass = this.viewMapper[name];
    if ([InquiringView, NaturalLanguageProcessing].includes(ViewClass)) {
      document.getElementById('next-step').setAttribute('disabled', 'true');
    }
  }
}
