import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import Header from '../components/Header'
import SectionTwo from '../components/SectionTwo'
import ApplySection from '../components/ApplySection'
import Footer from '../components/Footer'
import ISectionThree from '../components/Industries/ISectionThree'
import ISectionFour from '../components/Industries/ISectionFour'
export default function Industries() {
  
$(document).on("click", ".naccs .menu div", function () {
  var numberIndex = $(this).index();
     if (!$(this).is("active")) {
          $(".naccs .menu div").removeClass("active");
          $(".naccs ul li").removeClass("active");

          $(this).addClass("active");
          $(".naccs ul").find("li:eq(" + numberIndex + ")").addClass("active");

          var listItemHeight = $(".naccs ul")
              .find("li:eq(" + numberIndex + ")")
              .innerHeight();
          $(".naccs ul").height(listItemHeight + "px");
      }
  });

(function ($) {
$.fn.countTo = function (options) {
options = options || {};

return $(this).each(function () {
// set options for current element
var settings = $.extend({}, $.fn.countTo.defaults, {
  from:            $(this).data('from'),
  to:              $(this).data('to'),
  speed:           $(this).data('speed'),
  refreshInterval: $(this).data('refresh-interval'),
  decimals:        $(this).data('decimals')

}, options);

// how many times to update the value, and how much to increment the value on each update
var loops = Math.ceil(settings.speed / settings.refreshInterval),
  increment = (settings.to - settings.from) / loops;

// references & variables that will change with each update
var self = this,
  $self = $(this),
  loopCount = 0,
  value = settings.from,
  data = $self.data('countTo') || {};

$self.data('countTo', data);

// if an existing interval can be found, clear it first
if (data.interval) {
  clearInterval(data.interval);
}
data.interval = setInterval(updateTimer, settings.refreshInterval);

// initialize the element with the starting value
render(value);

function updateTimer() {
  value += increment;
  loopCount++;

  render(value);

  if (typeof(settings.onUpdate) == 'function') {
    settings.onUpdate.call(self, value);
  }

  if (loopCount >= loops) {
    // remove the interval
    $self.removeData('countTo');
    clearInterval(data.interval);
    value = settings.to;

    if (typeof(settings.onComplete) == 'function') {
      settings.onComplete.call(self, value);
    }
  }
}

function render(value) {
  var formattedValue = settings.formatter.call(self, value, settings);
  $self.text(formattedValue);
}
});
};

$.fn.countTo.defaults = {
from: 0,               // the number the element should start at
to: 0,                 // the number the element should end at
speed: 1000,           // how long it should take to count between the target numbers
refreshInterval: 100,  // how often the element should be updated
decimals: 0,           // the number of decimal places to show
formatter: formatter,  // handler for formatting the value before rendering
onUpdate: null,        // callback method for every time the element is updated
onComplete: null       // callback method for when the element finishes updating
};

function formatter(value, settings) {
  console.log(value);
  value = `${value}%`
return value;
}
}(jQuery));

jQuery(function ($) {

// start all the timers
$('.timer').each(count);

// restart a timer when a button is clicked
$( window ).scroll(function () {console.log($(window).scrollTop());
if($(window).scrollTop() > 300 && $(window).scrollTop() < 2000)
{
 $('.timer').each(count);
}
});

function count(options) {
  var $this = $(this);
  options = $.extend({}, options || {}, $this.data('countToOptions') || {});
  $this.countTo(options);
}
});

  return (
    <div>
    <Head>
    <meta charset="UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Industries</title>
    <link rel="stylesheet" href="css/bootstrap.min.css"/>
    <link rel="stylesheet" href="css/slick-theme.css" />
    <link rel="stylesheet" href="css/slick.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css"
        integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossOrigin="anonymous">
    </link>
    <link rel="stylesheet" href="css/applicationSS.css"/>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="js/slick.min.js"></script>
    <script src="js/bootstrap.min.js"></script>

    </Head>
    
    <Header titlename="Industries"  HeadrImge="images/Industries_Job.png"/>
    <SectionTwo TagLine=" We Help Our Clients Build Value
                    Digital Web Solutions" />
    <ISectionThree/>
    <ISectionFour/>
    <ApplySection/>
    <Footer/>
    </div>
  )
}
