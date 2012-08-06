/**
 * This is where some variables are set to configure the pages
 * The location and size of the target boxes are set
 * in box-sizes.less
 */

/**
 * list box names here if you're not using them eg:
 * disabledBoxes = ['box-two', 'box-four'];
 */
var disabledBoxes = [];

/**
 * the source of the main popcorn video
 * can be youtube url, vimeo, or just a mp4/ogv/webm file.
 * and the target box to load it into
 */
var pop_main_video = '';
var pop_main_target = 'box-one';

/* set up the popcorn object, you can skip this bit.
 * The documentation for the smart loading method
 * is here if you're curious:
 * http://popcornjs.org/popcorn-docs/players/#smart
 */
var pop = Popcorn.smart(
    '#' + pop_main_target,
    pop_main_video,
    {"frameAnimation":true}
);


/**
 * OK - THIS IS WHERE THE MAGIC HAPPENS
 *
 * copy and paste plugin settings from
 *
 *     http://popcornjs.org/popcorn-docs/plugins/
 *
 * below this comment block. just one after another. Tweak
 * Their settings to suit your needs.
 *
 * TIPS:
 *
 * Whenever the plugin mentions a target, put in the name
 * of the box that you want the plugin to load into.
 *
 * make sure that you don't repeat any values for plugins that
 * use an 'id' element
 *
 * e.g:
 *    pop.webpage({
 *      id: "webpages-a",
 *      start: 0,
 *      end: 5,
 *      src: "http://saramaamouri.com/",
 *      target: "box-two"
 *   });
 * The plugins that are available in the included version of popcorn are:
 * Mediaspawner, Code, Flickr, Footnote, Text,
 * Google Maps, Image, Google Feed, Subtitle,
 * Twitter, Webpage, Wikipedia, Mustache, Openmap,
 * Wordriver, Timeline, Documentcloud
 */