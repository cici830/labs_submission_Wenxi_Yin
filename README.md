# labs_submission_Wenxi_Yin
 
<!DOCTYPE html>
<html>
<head>
  <title>Embedded YouTube Video</title>
</head>
<body>

<h1>Welcome to My GitHub Page!</h1>

<!-- Embed YouTube Video -->
<div>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/KcMnaz_a7r0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<p>This video is embedded from YouTube and showcases relevant content that aligns with the theme of this GitHub Page. It provides valuable insights and enhances the visitor's experience by offering visual and auditory information that complements the textual content on the page.</p>

</body>
</html>
This code utilizes the p5.js library to create an engaging visual effect, transforming a specified text ("BaoZi") into an array of points and dynamically rendering this text with various visual enhancements. Initially, it sets up variables for the text, font size, font object, an array of points, and text bounds. It also calculates the center position to ensure the text is centered on the canvas. In the preload function, it loads a font file, ensuring the font is ready before drawing starts. The setup function creates a canvas, sets the font, and employs the font.textToPoints method to convert the text into a series of points. These points are used for drawing the text and are calculated along with the text bounds to center the text correctly.

The draw function is responsible for creating a dynamic background and rendering each point. The background color changes dynamically based on the horizontal position of the mouse. Each point from the text is animated with a wave effect by altering its y-coordinate and rotation angle, creating a flowing motion effect. This animation evolves over time and responds to mouse movement, adjusting the size, color, and rotation of each point dynamically, which results in an interactive visual display. The points' colors and transparency also vary with the mouse's position, producing a color-shifting effect alongside a flickering visual sensation, enhancing the dynamism of the visualization.

Overall, this code piece artistically showcases text in a dynamic, interactive format by converting it into a dot matrix and rendering it with real-time animations. It exemplifies the powerful capabilities of p5.js in visual arts and creative coding, offering an inventive way to display text with an interactive, animated aesthetic.
<iframe width="560" height="315" src="https://www.youtube.com/embed/ZfhBomNteUA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
This code leverages the p5.js JavaScript library to create an enchanting animation of falling snowflakes. Each snowflake is an instance of the Snowflake class, characterized by unique properties such as position, velocity, and acceleration, along with an angle for rotation to simulate a twirling effect as they fall. The constructor initializes these properties with random values, ensuring a variety of snowflake behaviors. The `applyForce` method mimics the effect of gravity, influencing each snowflake's movement. In the `update` method, snowflakes undergo a position update that also includes a sinuous lateral motion, enhancing the realism of gently falling snow. Once snowflakes reach a predefined "ground" level, they cease moving, simulating a pile-up of snow at the bottom of the screen. The `draw` function is the animation loop, refreshing the background and rendering each snowflake while continuously adding new ones to the array at regular intervals, thus maintaining a consistent snowfall. The overall effect is a serene and dynamic simulation of snowflakes drifting downwards, each following a slightly different path due to their unique initial settings.


