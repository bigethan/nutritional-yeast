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
 * and the target box to load it into
 */
var pop_main_video = 'http://www.youtube.com/watch?v=u31OjOPF-ZI';
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
 * The pluginss that are available in the included version of popcorn are:
 * Mediaspawner, Code, Flickr, Footnote, Text,
 * Google Maps, Image, Google Feed, Subtitle,
 * Twitter, Webpage, Wikipedia, Mustache, Openmap,
 * Wordriver, Timeline, Documentcloud
 */

pop.image({
    start: 1,
    end: 5,
    src: "http://shop.anseladams.com/v/vspfiles/photos/1501134-2T.jpg",
    target: "box-two"
});

pop.image({
    start: 5,
    end: 10,
    src: "http://wpos12.physik.uni-wuppertal.de/img/nlc01.JPG",
    target: "box-two"
});

pop.image({
    start: 10,
    end: 15,
    src: "http://cloudsandsuch.weebly.com/uploads/8/9/4/8/8948835/4290635.jpg",
    target: "box-two"
});

 pop.image({
    start: 15,
    end: 20,
    src: "http://sofurryfiles.com/std/thumb?page=398613",
    target: "box-two"
});
 pop.image({
    start: 20,
    end: 36,
    src: "http://shop.anseladams.com/v/vspfiles/photos/1501134-2T.jpg",
    target: "box-two"
});

pop.image({
    start: 1,
    end: 36,
    src: 'http://24.media.tumblr.com/tumblr_m81vtmPuF21qlzu9oo1_100.jpg',
    target: 'box-four'
});


pop.twitter({
    start: 1,
    end: 36,
    src: '#matrix',
    height: 200,
    width: 650,
    target: 'box-five'
});


pop.wikipedia({
    start: 1,
    end: 36,
    src: "http://en.wikipedia.org/wiki/The_Matrix",
    target: "box-three"
});

pop.code({
    start: 25.7,
    end: 27,
    onStart: function( options ) {
        console.log(options);
     $("#box-two, #box-three" ).effect(
        'bounce',
        {
            'direction': 'right',
            'times': 1,
            'distance': 200
        },
        300);
     $( "#box-four, #box-five" ).effect(
        'bounce',
        {
            'direction': 'down',
            'times': 1,
            'distance': 200
        },
        300);
    },

    onEnd: function( options ) {
        //nothing needed
    }
});


boxes = ['two','three','four','five'];
images = [
    'http://2.bp.blogspot.com/-2MQNrOlyWLU/TsTSJ8l907I/AAAAAAAACp4/aiqL3245tTg/s1600/theend031_0.jpg',
    'http://tmfassociates.com/blog/wp-content/uploads/2012/02/thats-all-folks.jpg',
    'http://blogs.buffalonews.com/artsbeat/images/2008/12/31/end.jpg',
    'http://www.blackwolf-images.com/images/wbg/loon/thats_all_folks.jpg'
];
for (var i = boxes.length - 1; i >= 0; i--) {
    pop.image({
        start: 36,
        end:60,
        src: images[i],
        target: 'box-' + boxes[i]
    });
}