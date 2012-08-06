oh hey.

So, you want to play with Mozilla's Popcorn (http://mozillapopcorn.org/), but you aren't a javascript wizard. But! you're sota comfortable with html and css, and you're willing to fiddle with some text files to make things do stuff.

Mozilla offers their 'Butter' tool to make thigs non technical, but it's far from finished, and dumbs things down a bit too much.

Enter Nutritional Yeast.  It's perhaps a slightly acquired taste, and isn't immediately obvious, but it really does go great on popcorn.  It's all html and javascript, so it'll run anywhere, and doesn't have any dependencies.

To get started clone this repo. The only directory that you'll really need to worry about is the demos/ path.  Create a folder in there with the name of the demo that you want to make, and then copy in the 'box-sizes.less' and 'popcorn-settings.js' files from one of the '-empty' folders.  Now you just need to:

tweak box-sizes.less
- set the size, location, and number of the targets that the popcorn plugins will target.

tweak popcorn-settings.js
- specify your video sorce and add plugins as you desire.

After you've made your tweaks, pull up your index.html file with a hash that specifies the directory name you created.  If you want to see a sample, you can use http://yourhost/index.html#five-boxes-demo

Thats about it.  If you have any questions, hit me up here on github.  I built this for my wife to use to prototype things for her journalism work, it's rough but it works (popcorn.js is awesome)

