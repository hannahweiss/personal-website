import React from 'react';
import Container from 'react-bootstrap/Container'
import Header from './../components/header.js'
import northeastern from './../images/northeastern_n.jpg'
import pathAi from './../images/pathai_logo.png'
import chewy from './../images/chewy_logo.jpeg'
import anydo from './../images/anydo_logo.png'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import workStyle from './../styles/work.module.css'


export default function Work(){
    return (
        <Container>
            <Header/>
            <Row className={workStyle.workRow}>
                <Col md="auto">
                    <a href="https://www.pathai.com" target="_blank">
                        <img className={workStyle.logo} src={pathAi} alt="pathAI"/>
                    </a>
                </Col>
                <Col>
                    <h5 className={workStyle.companyName}>
                        PathAI
                    </h5>
                    <p className={workStyle.locationText}>
                        <b>Software Engineering Co-op</b> | January 2020 - August 2020
                    </p>
                    <p className={workStyle.locationText}>
                    Boston, MA
                    </p>
                    <ul className={workStyle.locationText}>
                        <li>
                        As part of an Agile team, created a portal that allowed internal users to
                        track progress of client deliverables; my contributions included the following:
                        </li>
                        <ul>
                            <li>
                            Built a Python framework to retrieve and transform data related to
                            sampling, training and running inference for machine learning models
                            </li>
                            <li>
                            Using data generated by the Python framework mentioned above, 
                            populated a Postgres database designed specifically for tracking model development
                            </li>
                            <li>
                            Added pages to an existing VueJS application in order to display progress
                            of model creation
                            </li>
                        </ul>
                        <li>
                        Actively participated in team activities such as defining team goals, estimating
                        stories, and performing code reviews
                        </li>
                    </ul>
                </Col>
            </Row>
            <Row className={workStyle.workRow}>
                <Col md="auto">
                    <a href="https://www.khoury.northeastern.edu/" target="_blank">
                        <img className={workStyle.logo} src={northeastern} alt="northeastern"/>
                    </a>
                </Col>
                <Col>
                    <h5 className={workStyle.companyName}>
                        Khoury College of Computer Science
                    </h5>
                    <p className={workStyle.locationText}>
                    <b>Teaching Assistant</b> | September 2019 - December 2019, September 2020 - Present
                    </p>
                    <p className={workStyle.locationText}>
                    Boston, MA
                    </p>
                    <ul className={workStyle.locationText}>
                        <li>
                        Serve as a teaching assistant for Discrete Structures class
                        </li>
                        <li>
                        Assist students in understand class material, including probability, encryption, 
                        graphs and algorithms
                        </li>
                    </ul>
                </Col>
            </Row>
            <Row className={workStyle.workRow}>
                <Col md="auto">
                    <a href="https://www.chewy.com/" target="_blank">
                        <img className={workStyle.logo} src={chewy} alt="chewy"/>
                    </a>
                </Col>
                <Col>
                    <h5 className={workStyle.companyName}>
                        Chewy
                    </h5>
                    <p className={workStyle.locationText}>
                    <b>Software Engineering Co-op</b> | January 2019 - June 2019
                    </p>
                    <p className={workStyle.locationText}>
                    Boston, MA
                    </p>
                    <ul className={workStyle.locationText}>
                        <li>
                        As part of an Agile team, maintained the Chewy Pharmacy Application,
                        an e-commerce website that sells prescriptions for pets 
                        </li>
                        <li>
                        Using Java and PHP, completed enhancements to the order import API to prepare
                        for launch of Chewy Wholesale Pharmacy
                        </li>
                        <li>
                        Working with one other developer, migrated Pharmacy Application monitoring
                        from AWS Cloudwatch to Datadog to align with new company norms
                        </li>
                        <li>
                        Created new fax templates using HTML and CSS for veterinarians to approve prescriptions; 
                        designed and created a metadata table in SQL to identify which template to use
                        </li>
                    </ul>
                </Col>
            </Row>
            <Row className={workStyle.workRow}>
                <Col md="auto">
                    <a href="https://www.any.do/" target="_blank">
                        <img className={workStyle.logo} src={anydo} alt="anyDo"/>
                    </a>
                </Col>
                <Col>
                    <h5 className={workStyle.companyName}>
                        Any.do
                    </h5>
                    <p className={workStyle.locationText}>
                    <b>Intern</b> | June 2018 - August 2018
                    </p>
                    <p className={workStyle.locationText}>
                    Tel Aviv, Israel
                    </p>
                    <ul className={workStyle.locationText}>
                        <li>
                        Created and uploaded content for new Any.do customer support website
                        </li>
                        <li>
                        Provided email support to Any.do customers through Zendesk
                        </li>
                        <li>
                        Identified usability enhancements for the app based on customer feedback
                        </li>
                    </ul>
                </Col>
            </Row>
            <Row className={workStyle.workRow}>
                <Col md="auto">
                    <a href="https://wellness.khoury.northeastern.edu/" target="_blank">
                        <img className={workStyle.logo} src={northeastern} alt="wellness lab"/>
                    </a>
                </Col>
                <Col>
                    <h5 className={workStyle.companyName}>
                        Northeastern Wellness Technology 
                    </h5>
                    <p className={workStyle.locationText}>
                    <b>Volunteer</b> | January 2018 - April 2018
                    </p>
                    <p className={workStyle.locationText}>
                    Boston, MA
                    </p>
                    <ul className={workStyle.locationText}>
                        <li>
                        Assisted PhD student with research project aimed at using technology to
                        involve Boston teens in leadership programs
                        </li>
                        <li>
                        Read and summarized research papers; found measurements to use for tracking
                        progress of the project; proofread forms and documents
                        </li>
                    </ul>
                </Col>
            </Row>

        </Container>

    );

}