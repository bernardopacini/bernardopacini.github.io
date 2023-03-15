---
name: STARBOII - Search and Rescue Robot
image: assets/images/projects/starboii_robot/Starboii.jpg
dates: February 2017 - May 2017
description: Starboii is a semi-autonomous search and rescue robot. Starboii is capable of traversing difficult terrain, climbing a 1ft wall, navigating autonomously through a tunnel, and tracking a light. Starboii is also able to autonomously deliver a medical kit to a victim in need. The robot is controlled by a Teensy 3.0 and is made of aluminum. Starboii won Princeton's MAE 322 Mechanical Design competition, successfully completing the entire robot testing course.
team: Lena Dubitsky, Leif Fredericks, Trevor Henningson, Bernardo Pacini, Fitsum Petros, Jesus Serrano-Cendejas, Madeline Travnik, Bertha Wang
tools_used: PTC CREO 3.0, Arduino IDE, Princeton University Machine Shop, Leapfrog Creatr HS 3D Printer
links: 
  - GitHub | https://github.com/bpaciniengineering/SaRR_Autonomous_Robot
  - GrabCAD | https://grabcad.com/library/starboii-1
order: 4
---
<img src="/assets/images/projects/starboii_robot/Complete.JPG" class="project_header_image"/>
<!----------------------------------- TOPIC ----------------------------------->
<hr class = "projects_divider"/>
<section class="project_subdescription">
<img src="/assets/images/projects/starboii_robot/complete_course.JPG" class="project_subdescription_image_L"/>
<h4>Design Challenge and Requirements</h4>
<project_subdescription_text>Starboii is a semi-autonomous Search and Rescue Robot (SaRR) for Princeton's Mechanical Design class (MAE 322). Starboii is designed to complete various tasks to deliver a medical kit to a patient in need. The robot must be capable of smoothly navigating an obstacle course (intended to mimic debris) using open-loop control, traverse a 1ft wall autonomously, and navigate through a chute without touching the walls using strictly closed-loop control. Once through the chute the robot must identify a light source, travel to it, and deposit a medical kit entirely autonomously. Starboii successfully completed the course, winning the 2017 MAE 322 Competition.</project_subdescription_text>
</section>
<!----------------------------------- TOPIC ----------------------------------->
<hr class = "projects_divider"/>
<section class="project_subdescription">
<img src="/assets/images/projects/starboii_robot/Design_Methodology.JPG" class="project_subdescription_image_R"/>
<h4>Design Methodology and Key Points</h4>
<project_subdescription_text>Starboii went through an intensive design process focusing on the wall traversal challenge. Designs were considered and rated on various scales ranging from cost-effectiveness to practicality and reliability. This quantitative ranking system identified the claw-shaped front wheel as the most versatile and robust design to attempt the wall traversal. With the claw designed, the remainder of the robot was dimensioned, focusing on necessary dimensions, for example to reach over the wall. The robot is designed to be robust yet easy to manufacture and assemble. The frame of the robot is aluminum panels that are connected with L-beams and bolts to ensure easy and quick construction.</project_subdescription_text>
</section>
<!----------------------------------- TOPIC ----------------------------------->
<hr class = "projects_divider"/>
<section class="project_subdescription">
<img src="/assets/images/projects/starboii_robot/Wheelbase.JPG" class="project_subdescription_image_L"/>
<h4>Wheelbase Design and Functionality</h4>
<project_subdescription_text>Starboii's wheelbase is the foundation of the design and functionality of the robot. The idea is to keep the operation of the robot simple: Starboii has two drive wheels that are independently controlled to stear the robot. These wheels are located at the front of the robot during normal operation, helping maintain stability and control of the system. The claw-wheels are designed to grip the 1ft obstacle wall and pull Starboii over it. As Starboii reaches over the wall, the round side of the claw lands on the wall assisting a smooth landing for Starboii. Normal operation is accomplished by simply locking the claw wheels in place while the drive wheels maneuver the robot as necessary.</project_subdescription_text>
</section>
<!----------------------------------- TOPIC ----------------------------------->
<hr class = "projects_divider"/>
<section class="project_subdescription">
<img src="/assets/images/projects/starboii_robot/Code.JPG" class="project_subdescription_image_R"/>
<h4>Sensing and Control Systems</h4>
<project_subdescription_text>Starboii is powered by three conventional 9 volt drill batteries which power the Teensy 3.2 chip as well as the four motor controllers and necessary systems. Each segment of the mission has its own control architecture, ranging from open-loop control for the obstacle course to closed loop, sensor-based control for the chute and light navigation segments. The Starboii's operating system is entirely adaptable, allowing for new missions or functions. The Teensy chip also has 21 input/output ports, meaning new motors or sensors can be integrated into the design efficiently. Finally, to ensure reliability and safety of the robot, Starboii features a "safety switch," which disables all functions on the robot until the switch is deactivated.</project_subdescription_text>
</section>
<!----------------------------------- TOPIC ----------------------------------->
<hr class = "projects_divider"/>
<section class="project_subdescription">
<img src="/assets/images/projects/starboii_robot/Analysis.JPG" class="project_subdescription_image_L"/>
<h4>Detailed Design and Analysis</h4>
<project_subdescription_text>Starboii is intended to be a rugged and reliable robot. Additionally, Starboii must accomplish all of its mission requirements without errors. Thus, the Starboii design was carefully reviewed and analyzed. This includes calculations to determine the stress on the frame, center of gravity calculations to ensure the robot does not become unstable, as well as calculations to ensure the motors on the robot are sufficiently powerful to operate and manuever the robot effectively. Starboii was required to pass a drop test before entering the obstacle course&mdash;Starboii succeeded in the test without any damage.</project_subdescription_text>
</section>
<!----------------------------------- TOPIC ----------------------------------->
<hr class = "projects_divider"/>
<section class="project_subdescription">
<img src="/assets/images/projects/starboii_robot/opensource.jpg" class="project_subdescription_image_R"/>
<h4>Opensource</h4>
<project_subdescription_text>Although this project is at this moment closed, all files are available on Github <a href="https://github.com/bpaciniengineering/SaRR_Autonomous_Robot" target="_blank">here</a> and GrabCAD <a href="https://grabcad.com/library/starboii-1" target="_blank">here</a>. Starboii is intended to be easily manufacturable using a standard bandsaw, mill, and lathe. Various components can be further improved such as the wooden wheels used for demonstration should instead by manufactured in fiberglass with a foam core. Additionally, the control system on Starboii is entirely adaptable allowing it to be used for different missions. Starboii also featuers various mounting points for additional sensors, cameras, or components to increase the robots functions and abilities. It is important to note that detailed documentation of each construction process is not provided, however please do not hesitate to contact me for information and assistance using the "Contact" form.</project_subdescription_text>
</section>
