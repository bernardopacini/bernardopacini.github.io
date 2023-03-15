---
name: Aircraft Preliminary Design and Sizing Calculations Toolbox
image: assets/images/projects/aircraft_sizing/aircraft_sizing.jpg
dates: February 2017 - Ongoing
description: This tool box is designed for the preliminary stages of an aircraft's design process. The software provides initial maximum takeoff weight and surface area estimates as well as sizing parameters for the fuselage, wings, and tails. This program is designed to function in a design iteration loop using OpenVSP or other aircraft modeling and analysis software.
team: Raj Balaji, Jan Bernard, Leif Fredericks, Bernardo Pacini, Nathan Wei
tools_used: MATLAB
links: 
  - GitHub | https://github.com/bpaciniengineering/Preliminary_Aircraft_Design_Calculations
order: 5
---
<img src="/assets/images/projects/aircraft_sizing/Header.JPG" class="project_header_image"/>
<!----------------------------------- TOPIC ----------------------------------->
<hr class = "projects_divider"/>
<section class="project_subdescription">
	<img src="/assets/images/projects/aircraft_sizing/Weight.JPG" class="project_subdescription_image_L"/>
	<h4>Weight and Surface Area Calculations</h4>
	<project_subdescription_text>This sizing code calculates the maximum takeoff weight, surface area, and thrust for specific parameters. The calculations are formulated by dividing the craft's mission into various sections (eg taxi, takeoff, cruise out, approach, and land) and calculates the weight ratios for the entire mission. The ratios are combined to yield the final total mass. On/off switches enable additional functions such as calculations for minimum takeoff field length. The code is adaptable and accepts relevant flight parameters such as cruise mach number and thrust specific fuel consumption. Additionally, the workflow for iterations can be automated by enabling data exporting, which outputs all relevant parameters to a text document.</project_subdescription_text>
</section>
<!----------------------------------- TOPIC ----------------------------------->
<hr class = "projects_divider"/>
<section class="project_subdescription">
	<img src="/assets/images/projects/aircraft_sizing/Carpet_Plot.JPG" class="project_subdescription_image_R"/>
	<h4>Sizing and Carpet Plot Calculations</h4>
	<project_subdescription_text>The aircraft sizing is fully integrated with the initial weight and parameter calculations. Enabling the sizing function calculates and displays the Carpet Plot with stall, takeoff, climb performance, cruise performance, loiter calculations, landing calculations, as well as maximum and minimum load factors lines. The Carpet Plot is intuitively colored to display the viable design space. The calculations prompt the user for the desired design point for calculating and exporting the surface area and thrust requirements for the aircraft. It is relevant to note that this carpet plot is for thrust-base aircraft designs. A power-based code is in development but is not yet available.</project_subdescription_text>
</section>

<!----------------------------------- TOPIC ----------------------------------->
<hr class = "projects_divider"/>
<section class="project_subdescription">
	<img src="/assets/images/projects/aircraft_sizing/openVSP.png" class="project_subdescription_image_L"/>
	<h4>OpenVSP Design Iteration</h4>
	<project_subdescription_text>The workflow is designed to interface with openVSP. The exported parameters from the initial sizing code should set in the openVSP GUI to efficiently model the airplane in three dimensions. With the design generated, openVSP is a powerful software that is capable of running vortex lattice simulation to analyze the aircraft design iteration to determine specific parameters such as the lift-to-drag ratio. The results of the analysis in openVSP should be fed directly into the input section of this sizing suite for another design iteration. The combination of this software suite and openVSP allows for interfacing with other performance analysis tools such as SUAVE or AVL. </project_subdescription_text>
</section>
<!----------------------------------- TOPIC ----------------------------------->
<hr class = "projects_divider"/>
<section class="project_subdescription">
	<img src="/assets/images/projects/aircraft_sizing/opensource.jpg" class="project_subdescription_image_R"/>
	<h4>Opensource</h4>
	<project_subdescription_text>This code is MATLAB based and available on Github <a href="https://github.com/bpaciniengineering/Preliminary_Aircraft_Design_Calculations" target="_blank">here</a>. The design code is divided into two parts: weight, surface area, and thrust calculation code and general parameter sizing code. Each part resides in its own directory. The source code should be downloaded and the two folders should be added to the list of MATLAB search folders to ensure that they can be called as a library for integration in design projects. This project can be downloaded or branched and modified to meet specific project needs. If you do use it, all we ask is that you note that you did so we can spread the word about it! Suggestions and reccomendations are welcome and verified code provided by additional developers are also appreciated. </project_subdescription_text>
</section>
