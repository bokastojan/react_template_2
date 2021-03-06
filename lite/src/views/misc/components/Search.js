import React from "react";
import { Tab, Row, Col, Nav, NavItem } from "react-bootstrap";

import { SparklineContainer } from "../../../common/graphs/inline";

export default class Search extends React.Component {
  onClick = e => {
    e.preventDefault();
    return false;
  };
  render() {
    return (
      <div id="content">
        <SparklineContainer>
          <Tab.Container defaultActiveKey="first" id="search-results-tabs">
            <Row className="clearfix">
              <Col sm={12}>
                <Nav bsStyle="tabs" className="nav nav-tabs bordered">
                  <NavItem eventKey="first">
                    Search All <i className="fa fa-caret-down" />
                  </NavItem>
                  <NavItem eventKey="second">Users</NavItem>
                  <NavItem eventKey="third">Search History</NavItem>

                  <NavItem
                    className="pull-right hidden-mobile"
                    eventKey="first"
                  >
                    <span className="note">
                      About 24,431 results (0.15 seconds)
                    </span>
                  </NavItem>
                </Nav>
              </Col>
              <Col sm={12}>
                <Tab.Content
                  animation
                  className="tab-content bg-color-white padding-10"
                >
                  <Tab.Pane eventKey="first">
                    <div>
                      <h1>
                        Search <span className="semi-bold">Everything</span>
                      </h1>
                      <br />
                      <div className="input-group input-group-lg hidden-mobile">
                        <div className="input-group-btn" data-dropdown>
                          <button
                            type="button"
                            className="btn btn-default dropdown-toggle"
                          >
                            Everything <span className="caret" />
                          </button>
                          <ul className="dropdown-menu">
                            <li className="active">
                              <a href="#/" onClick={this.onClick}>
                                <i className="fa fa-check" /> Everything
                              </a>
                            </li>
                            <li className="divider" />
                            <li>
                              <a href="#/" onClick={this.onClick}>Users</a>
                            </li>
                            <li>
                              <a href="#/" onClick={this.onClick}>Projects</a>
                            </li>
                            <li>
                              <a href="#/" onClick={this.onClick}>Sites</a>
                            </li>
                          </ul>
                        </div>
                        <input
                          className="form-control input-lg"
                          type="text"
                          placeholder="Search again..."
                          id="search-project"
                        />
                        <div className="input-group-btn">
                          <button type="submit" className="btn btn-default">
                            &nbsp;&nbsp;&nbsp;
                            <i className="fa fa-fw fa-search fa-lg" />
                            &nbsp;&nbsp;&nbsp;
                          </button>
                        </div>
                      </div>
                      <h1 className="font-md">
                        Search Results for
                        <span className="semi-bold">Projects</span>
                        <small className="text-danger">
                          &nbsp;&nbsp;(2,281 results)
                        </small>
                      </h1>
                      <div className="search-results clearfix smart-form">
                        <h4>
                          <i className="fa fa-plus-square txt-color-blue" />
                          &nbsp;
                          <a href="#/" onClick={this.onClick}>
                            SmartAdmin - Responsive Dashboard Template
                          </a>
                        </h4>
                        <div>
                          <div className="rating display-inline">
                            <input
                              type="radio"
                              name="stars-rating"
                              id="stars-rating-5"
                            />
                            <label htmlFor="stars-rating-5">
                              <i className="fa fa-star" />
                            </label>
                            <input
                              type="radio"
                              name="stars-rating"
                              id="stars-rating-4"
                            />
                            <label htmlFor="stars-rating-4">
                              <i className="fa fa-star" />
                            </label>
                            <input
                              type="radio"
                              name="stars-rating"
                              id="stars-rating-3"
                            />
                            <label htmlFor="stars-rating-3">
                              <i className="fa fa-star" />
                            </label>
                            <input
                              type="radio"
                              name="stars-rating"
                              id="stars-rating-2"
                            />
                            <label htmlFor="stars-rating-2">
                              <i className="fa fa-star" />
                            </label>
                            <input
                              type="radio"
                              name="stars-rating"
                              id="stars-rating-1"
                            />
                            <label htmlFor="stars-rating-1">
                              <i className="fa fa-star" />
                            </label>
                          </div>
                          <br />
                          <div className="url text-success">
                            http://www.wrapbootstrap.com
                            <i className="fa fa-caret-down" />
                          </div>
                          <p className="description">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book
                          </p>
                        </div>
                      </div>
                      <div className="search-results clearfix">
                        <h4>
                          <a href="#/" onClick={this.onClick}>
                            SmartAdmin- Responsive Dashboard Template
                          </a>
                        </h4>
                        <div>
                          <p className="note">
                            <a href="#/" onClick={this.onClick}>
                              <i className="fa fa-thumbs-up" /> Like this
                              link&nbsp;&nbsp;
                            </a>
                            <a href="#/" onClick={this.onClick}>
                              <i className="fa fa-chain" /> Share this
                              link&nbsp;&nbsp;
                            </a>
                            <a href="#/" onClick={this.onClick}>
                              <i className="fa fa-star txt-color-yellow" />
                              Favorite&nbsp;&nbsp;
                            </a>
                          </p>
                          <div className="url text-success">
                            http://www.wrapbootstrap.com
                            <i className="fa fa-caret-down" />
                          </div>
                          <p className="description">
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout. The point of using Lorem
                            Ipsum is that it has a more-or-less normal
                            distribution of letters, as opposed to using
                            'Content here...
                          </p>
                        </div>
                      </div>
                      <div className="search-results clearfix">
                        <h4>
                          <a href="#/" onClick={this.onClick}>
                            SmartAdmin- Responsive Dashboard Template
                          </a>
                          &nbsp;&nbsp;
                          <a href="#/" onClick={this.onClick}>
                            <i className="fa fa-caret-up fa-lg" />
                          </a>
                        </h4>
                        <img src="assets/img/demo/sample.jpg" alt="" />
                        <div>
                          <p className="note">
                            <a href="#/" onClick={this.onClick} className="text-danger">
                              <i className="fa fa-thumbs-up" /> Like&nbsp;&nbsp;
                            </a>
                            <a href="#/" onClick={this.onClick}>
                              <i className="fa fa-chain" /> Share this
                              link&nbsp;&nbsp;
                            </a>
                            <a href="#/" onClick={this.onClick}>
                              <i className="fa fa-star txt-color-yellow" />
                              Favorite&nbsp;&nbsp;
                            </a>
                          </p>
                          <div className="url text-success">
                            smartadmin/index.html?#ajax/gallery.html
                            <i className="fa fa-caret-down" />
                          </div>
                          <p className="description">
                            Oct 1, 2006 - Uploaded by 02842356107
                            <br />
                            <br />
                            <a href="#/"
                              onClick={this.onClick}
                              className="btn btn-default btn-xs"
                            >
                              Go to gallery
                            </a>
                          </p>
                        </div>
                      </div>
                      <div className="search-results clearfix">
                        <h4>
                          <a href="#/" onClick={this.onClick}>
                            Company project Timeline Stock
                          </a>
                          &nbsp;&nbsp;
                          <a href="#/" onClick={this.onClick}>
                            <i className="fa fa-caret-up fa-lg" />
                          </a>
                        </h4>
                        <div>
                          <span
                            className="sparkline txt-color-blueLight"
                            data-sparkline-type="line"
                            data-sparkline-width="150px"
                            data-sparkline-height="25px"
                          >
                            10,3,8,4,3,10,7,8,4,6,4,6,8,3
                          </span>
                          <span className="display-inline note font-lg semi-bold">
                            <small>
                              <i className="fa fa-arrow-circle-up text-success" />
                              143.43
                            </small>
                          </span>
                          <p className="note">
                            <a href="#/" onClick={this.onClick}>
                              <i className="fa fa-thumbs-up" /> Like this
                              link&nbsp;&nbsp;
                            </a>
                            <a href="#/" onClick={this.onClick}>
                              <i className="fa fa-chain" /> Share this
                              link&nbsp;&nbsp;
                            </a>
                            <a href="#/" onClick={this.onClick}>
                              <i className="fa fa-star txt-color-yellow" />
                              Favorite&nbsp;&nbsp;
                            </a>
                          </p>
                          <div className="url text-success">
                            Dashboard &gt; Projects &gt; IT Report
                            <i className="fa fa-caret-down" />
                          </div>
                          <p className="description">
                            Lorem Ipsum comes from sections 1.10.32 and 1.10.33
                            of "de Finibus Bonorum et Malorum" (The Extremes of
                            Good and Evil) by Cicero, written in 45 BC.
                          </p>
                        </div>
                      </div>
                      <div className="search-results clearfix">
                        <h4>
                          <a href="#/" onClick={this.onClick}>
                            Company project Timeline Stock
                          </a>
                          &nbsp;&nbsp;
                          <small>[PDF]</small>
                        </h4>
                        <span
                          className="sparkline txt-color-blueLight display-inline"
                          data-sparkline-type="pie"
                          data-sparkline-offset={90}
                          data-sparkline-piesize="55px"
                        >
                          10,3,8,4,
                        </span>
                        <div>
                          <p className="note">
                            <a href="#/" onClick={this.onClick}>
                              <i className="fa fa-thumbs-up" /> Like this
                              link&nbsp;&nbsp;
                            </a>
                            <a href="#/" onClick={this.onClick}>
                              <i className="fa fa-chain" /> Share this
                              link&nbsp;&nbsp;
                            </a>
                            <a href="#/" onClick={this.onClick}>
                              <i className="fa fa-star txt-color-yellow" />
                              Favorite&nbsp;&nbsp;
                            </a>
                          </p>
                          <div className="url text-success">
                            Dashboard &gt; Projects &gt; IT Report
                            <i className="fa fa-caret-down" />
                          </div>
                          <p className="description">
                            Last updated by
                            <a href="#/" onClick={this.onClick}>Rusho Burthoth </a>
                          </p>
                        </div>
                      </div>
                      <div className="search-results clearfix">
                        <h4>
                          <a href="#/" onClick={this.onClick}>
                            SmartAdmin- Responsive Dashboard Template
                          </a>
                        </h4>
                        <div>
                          <p className="note">
                            <a href="#/" onClick={this.onClick}>
                              <i className="fa fa-thumbs-up" /> Like this
                              link&nbsp;&nbsp;
                            </a>
                            <a href="#/" onClick={this.onClick}>
                              <i className="fa fa-chain" /> Share this
                              link&nbsp;&nbsp;
                            </a>
                            <a href="#/" onClick={this.onClick}>
                              <i className="fa fa-star txt-color-yellow" />
                              Favorite&nbsp;&nbsp;
                            </a>
                          </p>
                          <div className="url text-success">
                            http://www.wrapbootstrap.com
                            <i className="fa fa-caret-down" />
                          </div>
                        </div>
                      </div>
                      <div className="search-results clearfix">
                        <h4>
                          <a href="#/" onClick={this.onClick}>
                            SmartAdmin- Responsive Dashboard Template
                          </a>
                        </h4>
                        <div>
                          <p className="note">
                            <a href="#/" onClick={this.onClick}>
                              <i className="fa fa-thumbs-up" /> Like this
                              link&nbsp;&nbsp;
                            </a>
                            <a href="#/" onClick={this.onClick}>
                              <i className="fa fa-chain" /> Share this
                              link&nbsp;&nbsp;
                            </a>
                            <a href="#/" onClick={this.onClick}>
                              <i className="fa fa-star txt-color-yellow" />
                              Favorite&nbsp;&nbsp;
                            </a>
                          </p>
                          <div className="url text-success">
                            http://www.wrapbootstrap.com
                            <i className="fa fa-caret-down" />
                          </div>
                          <p className="description">
                            Last updated by
                            <a href="#/" onClick={this.onClick}>Rusho Burthoth </a>
                          </p>
                        </div>
                      </div>
                      <div className="text-center">
                        <hr />
                        <ul className="pagination no-margin">
                          <li className="prev disabled">
                            <a href="#/" onClick={this.onClick}>Previous</a>
                          </li>
                          <li className="active">
                            <a href="#/" onClick={this.onClick}>1</a>
                          </li>
                          <li>
                            <a href="#/" onClick={this.onClick}>2</a>
                          </li>
                          <li>
                            <a href="#/" onClick={this.onClick}>3</a>
                          </li>
                          <li className="next">
                            <a href="#/" onClick={this.onClick}>Next</a>
                          </li>
                        </ul>
                        <br />
                        <br />
                        <br />
                      </div>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <div>
                      <h1>
                        Search <span className="semi-bold">Users</span>
                      </h1>
                      <br />
                      <div className="input-group input-group-lg">
                        <input
                          className="form-control input-lg"
                          type="text"
                          placeholder="Search again..."
                          id="search-user"
                        />
                        <div className="input-group-btn">
                          <button type="submit" className="btn btn-default">
                            <i className="fa fa-fw fa-search fa-lg" />
                          </button>
                        </div>
                      </div>
                      <h1 className="font-md">
                        Search Results for
                        <span className="semi-bold">Users</span>
                        <small className="text-danger">
                          &nbsp;&nbsp;(181 results)
                        </small>
                      </h1>
                      <br />
                      <div className="table-responsive">
                        <table
                          id="resultTable"
                          className="table table-striped table-bordered table-hover"
                        >
                          <thead>
                            <tr>
                              <th style={{ width: 30 }}>Pic</th>
                              <th>F.Name</th>
                              <th>L.Name</th>
                              <th>DOB</th>
                              <th>Email / Username</th>
                              <th>City</th>
                              <th>Postal</th>
                              <th>Phone</th>
                              <th>Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <img
                                  src="assets/img/avatars/male.png"
                                  alt=""
                                  width={20}
                                />
                              </td>
                              <td>Noble</td>
                              <td>Saunders</td>
                              <td>2002-12-07</td>
                              <td>
                                numbers@lipliquid.com
                                <a href="#/"
                                  onClick={this.onClick}
                                  className="pull-right"
                                >
                                  <i className="fa fa-key" />
                                </a>
                              </td>
                              <td>La Puerta</td>
                              <td>54076</td>
                              <td>558-908-4575</td>
                              <td>
                                <span className="label label-success">
                                  Active
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="assets/img/avatars/male.png"
                                  alt=""
                                  width={20}
                                />
                              </td>
                              <td>Anna</td>
                              <td>Meeks</td>
                              <td>2007-04-05</td>
                              <td>
                                carmel@forkform.me
                                <a href="#/"
                                  onClick={this.onClick}
                                  className="pull-right"
                                >
                                  <i className="fa fa-key" />
                                </a>
                              </td>
                              <td>Holland</td>
                              <td>73490</td>
                              <td>255-757-8495</td>
                              <td>
                                <span className="label label-success">
                                  Active
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="assets/img/avatars/male.png"
                                  alt=""
                                  width={20}
                                />
                              </td>
                              <td>Millicent</td>
                              <td>Decker</td>
                              <td>2007-03-27</td>
                              <td>
                                agustin.murray@babyback.me
                                <a href="#/"
                                  onClick={this.onClick}
                                  className="pull-right"
                                >
                                  <i className="fa fa-key" />
                                </a>
                              </td>
                              <td>Leona</td>
                              <td>45960</td>
                              <td>207-445-7704</td>
                              <td>
                                <span className="label label-success">
                                  Active
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="assets/img/avatars/male.png"
                                  alt=""
                                  width={20}
                                />
                              </td>
                              <td>Misty</td>
                              <td>Mcdowell</td>
                              <td>2002-12-09</td>
                              <td>
                                mona.doreen@processproduce.edu
                                <a href="#/"
                                  onClick={this.onClick}
                                  className="pull-right"
                                >
                                  <i className="fa fa-key" />
                                </a>
                              </td>
                              <td>Sweetwater</td>
                              <td>94133</td>
                              <td>707-118-9601</td>
                              <td>
                                <span className="label label-success">
                                  Active
                                </span>
                              </td>
                            </tr>
                            <tr className="danger">
                              <td>
                                <img
                                  src="assets/img/avatars/male.png"
                                  alt=""
                                  width={20}
                                />
                              </td>
                              <td>Cleo</td>
                              <td>Blue</td>
                              <td>1993-04-30</td>
                              <td>
                                collin@berry.info
                                <a href="#/"
                                  onClick={this.onClick}
                                  className="pull-right"
                                >
                                  <i className="fa fa-key" />
                                </a>
                              </td>
                              <td>Groesbeck</td>
                              <td>12764</td>
                              <td>543-827-8732</td>
                              <td>
                                <span className="label label-danger">
                                  Disabled
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="assets/img/avatars/male.png"
                                  alt=""
                                  width={20}
                                />
                              </td>
                              <td>Eliza</td>
                              <td>Proctor</td>
                              <td>2003-12-26</td>
                              <td>
                                lawanda@event.me
                                <a href="#/"
                                  onClick={this.onClick}
                                  className="pull-right"
                                >
                                  <i className="fa fa-key" />
                                </a>
                              </td>
                              <td>Alto</td>
                              <td>70454</td>
                              <td>453-985-9884</td>
                              <td>
                                <span className="label label-success">
                                  Active
                                </span>
                              </td>
                            </tr>
                            <tr className="success">
                              <td>
                                <img
                                  src="assets/img/avatars/male.png"
                                  alt=""
                                  width={20}
                                />
                              </td>
                              <td>Chantel</td>
                              <td>Medina</td>
                              <td>1993-04-01</td>
                              <td>
                                marilynn.lucretia@animalanswer.edu
                                <a href="#/"
                                  onClick={this.onClick}
                                  className="pull-right"
                                >
                                  <i className="fa fa-key" />
                                </a>
                              </td>
                              <td>Lozano</td>
                              <td>46151</td>
                              <td>789-917-1518</td>
                              <td>
                                <span className="label label-primary">
                                  ADMIN
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="assets/img/avatars/male.png"
                                  alt=""
                                  width={20}
                                />
                              </td>
                              <td>Tisha</td>
                              <td>Burns</td>
                              <td>1997-10-23</td>
                              <td>
                                luella@square.me
                                <a href="#/"
                                  onClick={this.onClick}
                                  className="pull-right"
                                >
                                  <i className="fa fa-key" />
                                </a>
                              </td>
                              <td>Dayton</td>
                              <td>18943</td>
                              <td>510-644-1193</td>
                              <td>
                                <span className="label label-success">
                                  Active
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="assets/img/avatars/female.png"
                                  alt=""
                                  width={20}
                                />
                              </td>
                              <td>Estelle</td>
                              <td>Barton</td>
                              <td>1993-01-21</td>
                              <td>
                                rod.quinton@whilewhip.com
                                <a href="#/"
                                  onClick={this.onClick}
                                  className="pull-right"
                                >
                                  <i className="fa fa-key" />
                                </a>
                              </td>
                              <td>Texline</td>
                              <td>29712</td>
                              <td>786-799-7584</td>
                              <td>
                                <span className="label label-success">
                                  Active
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="assets/img/avatars/female.png"
                                  alt=""
                                  width={20}
                                />
                              </td>
                              <td>Angeline</td>
                              <td>Roman</td>
                              <td>2002-11-23</td>
                              <td>
                                katrina.claire.lindsey@letterlevel.com
                                <a href="#/"
                                  onClick={this.onClick}
                                  className="pull-right"
                                >
                                  <i className="fa fa-key" />
                                </a>
                              </td>
                              <td>Ranchitos Las Lomas</td>
                              <td>87049</td>
                              <td>645-104-7232</td>
                              <td>
                                <span className="label label-success">
                                  Active
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="assets/img/avatars/male.png"
                                  alt=""
                                  width={20}
                                />
                              </td>
                              <td>Barrett</td>
                              <td>Pearce</td>
                              <td>2013-04-16</td>
                              <td>
                                katrina.claire.lindsey@smooth.me
                                <a href="#/"
                                  onClick={this.onClick}
                                  className="pull-right"
                                >
                                  <i className="fa fa-key" />
                                </a>
                              </td>
                              <td>Flowella</td>
                              <td>45074</td>
                              <td>234-002-0762</td>
                              <td>
                                <span className="label label-success">
                                  Active
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="assets/img/avatars/male.png"
                                  alt=""
                                  width={20}
                                />
                              </td>
                              <td>Margarita</td>
                              <td>Lancaster</td>
                              <td>2013-11-29</td>
                              <td>
                                terra@smokesmooth.edu
                                <a href="#/"
                                  onClick={this.onClick}
                                  className="pull-right"
                                >
                                  <i className="fa fa-key" />
                                </a>
                              </td>
                              <td>Grand Saline</td>
                              <td>50886</td>
                              <td>354-908-6520</td>
                              <td>
                                <span className="label label-success">
                                  Active
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="assets/img/avatars/female.png"
                                  alt=""
                                  width={20}
                                />
                              </td>
                              <td>Rebekah</td>
                              <td>Hatcher</td>
                              <td>2003-01-03</td>
                              <td>
                                janelle.lourdes.laurel@antany.edu
                                <a href="#/"
                                  onClick={this.onClick}
                                  className="pull-right"
                                >
                                  <i className="fa fa-key" />
                                </a>
                              </td>
                              <td>Laureles</td>
                              <td>26524</td>
                              <td>345-807-9800</td>
                              <td>
                                <span className="label label-success">
                                  Active
                                </span>
                              </td>
                            </tr>
                            <tr className="warning">
                              <td>
                                <img
                                  src="assets/img/avatars/male.png"
                                  alt=""
                                  width={20}
                                />
                              </td>
                              <td>Lesley</td>
                              <td>Mccall</td>
                              <td>2000-07-27</td>
                              <td>
                                pam.kelli@recordred.me
                                <a href="#/"
                                  onClick={this.onClick}
                                  className="pull-right"
                                >
                                  <i className="fa fa-key" />
                                </a>
                              </td>
                              <td>Eagle Lake</td>
                              <td>83430</td>
                              <td>255-974-8448</td>
                              <td>
                                <span className="label label-warning">
                                  Inactive
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="assets/img/avatars/male.png"
                                  alt=""
                                  width={20}
                                />
                              </td>
                              <td>Josephine</td>
                              <td>Cooley</td>
                              <td>2006-10-31</td>
                              <td>
                                magdalena@accountacid.me
                                <a href="#/"
                                  onClick={this.onClick}
                                  className="pull-right"
                                >
                                  <i className="fa fa-key" />
                                </a>
                              </td>
                              <td>Stagecoach</td>
                              <td>89756</td>
                              <td>502-841-8206</td>
                              <td>
                                <span className="label label-success">
                                  Active
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="assets/img/avatars/male.png"
                                  alt=""
                                  width={20}
                                />
                              </td>
                              <td>Joseph</td>
                              <td>Dawson</td>
                              <td>2013-01-25</td>
                              <td>
                                yvonne.annette.june@streetstretch.com
                                <a href="#/"
                                  onClick={this.onClick}
                                  className="pull-right"
                                >
                                  <i className="fa fa-key" />
                                </a>
                              </td>
                              <td>Oyster Creek</td>
                              <td>94520</td>
                              <td>954-256-3614</td>
                              <td>
                                <span className="label label-success">
                                  Active
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="assets/img/avatars/male.png"
                                  alt=""
                                  width={20}
                                />
                              </td>
                              <td>Marlin</td>
                              <td>Dorsey</td>
                              <td>1994-12-08</td>
                              <td>
                                jerrod.weston.hershel@specialsponge.com
                                <a href="#/"
                                  onClick={this.onClick}
                                  className="pull-right"
                                >
                                  <i className="fa fa-key" />
                                </a>
                              </td>
                              <td>Lubbock</td>
                              <td>19131</td>
                              <td>510-209-3012</td>
                              <td>
                                <span className="label label-success">
                                  Active
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="assets/img/avatars/male.png"
                                  alt=""
                                  width={20}
                                />
                              </td>
                              <td>Reginald</td>
                              <td>Nash</td>
                              <td>2000-11-26</td>
                              <td>
                                mel@officeoil.edu
                                <a href="#/"
                                  onClick={this.onClick}
                                  className="pull-right"
                                >
                                  <i className="fa fa-key" />
                                </a>
                              </td>
                              <td>Port Mansfield</td>
                              <td>24679</td>
                              <td>390-385-6930</td>
                              <td>
                                <span className="label label-success">
                                  Active
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="assets/img/avatars/male.png"
                                  alt=""
                                  width={20}
                                />
                              </td>
                              <td>Helga</td>
                              <td>Johnson</td>
                              <td>2000-03-09</td>
                              <td>
                                kirby@stiffstill.edu
                                <a href="#/"
                                  onClick={this.onClick}
                                  className="pull-right"
                                >
                                  <i className="fa fa-key" />
                                </a>
                              </td>
                              <td>Oakhurst</td>
                              <td>52280</td>
                              <td>443-588-7234</td>
                              <td>
                                <span className="label label-success">
                                  Active
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="assets/img/avatars/male.png"
                                  alt=""
                                  width={20}
                                />
                              </td>
                              <td>Silas</td>
                              <td>Arrington</td>
                              <td>2002-11-30</td>
                              <td>
                                lula.lola@judgejump.org
                                <a href="#/"
                                  onClick={this.onClick}
                                  className="pull-right"
                                >
                                  <i className="fa fa-key" />
                                </a>
                              </td>
                              <td>Bayou Vista</td>
                              <td>59377</td>
                              <td>729-309-5537</td>
                              <td>
                                <span className="label label-success">
                                  Active
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="assets/img/avatars/female.png"
                                  alt=""
                                  width={20}
                                />
                              </td>
                              <td>Thelma</td>
                              <td>Boyer</td>
                              <td>2004-10-26</td>
                              <td>
                                athena.janel@attemptattention.com
                                <a href="#/"
                                  onClick={this.onClick}
                                  className="pull-right"
                                >
                                  <i className="fa fa-key" />
                                </a>
                              </td>
                              <td>Keller</td>
                              <td>53463</td>
                              <td>958-473-4716</td>
                              <td>
                                <span className="label label-success">
                                  Active
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="assets/img/avatars/female.png"
                                  alt=""
                                  width={20}
                                />
                              </td>
                              <td>Sybil</td>
                              <td>Mahoney</td>
                              <td>1994-07-16</td>
                              <td>
                                lara@water.edu
                                <a href="#/"
                                  onClick={this.onClick}
                                  className="pull-right"
                                >
                                  <i className="fa fa-key" />
                                </a>
                              </td>
                              <td>Mila Doce</td>
                              <td>96556</td>
                              <td>129-759-9595</td>
                              <td>
                                <span className="label label-success">
                                  Active
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="assets/img/avatars/male.png"
                                  alt=""
                                  width={20}
                                />
                              </td>
                              <td>David</td>
                              <td>Dean</td>
                              <td>1992-12-06</td>
                              <td>
                                ma.justina.gussie@pumppunishment.edu
                                <a href="#/"
                                  onClick={this.onClick}
                                  className="pull-right"
                                >
                                  <i className="fa fa-key" />
                                </a>
                              </td>
                              <td>Columbus</td>
                              <td>88557</td>
                              <td>626-095-2870</td>
                              <td>
                                <span className="label label-success">
                                  Active
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="assets/img/avatars/male.png"
                                  alt=""
                                  width={20}
                                />
                              </td>
                              <td>Dina</td>
                              <td>Steward</td>
                              <td>1997-11-26</td>
                              <td>
                                clifton.willard.daryl@far.info
                                <a href="#/"
                                  onClick={this.onClick}
                                  className="pull-right"
                                >
                                  <i className="fa fa-key" />
                                </a>
                              </td>
                              <td>Mason</td>
                              <td>54724</td>
                              <td>912-684-8315</td>
                              <td>
                                <span className="label label-success">
                                  Active
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="assets/img/avatars/male.png"
                                  alt=""
                                  width={20}
                                />
                              </td>
                              <td>Raymundo</td>
                              <td>Massey</td>
                              <td>2005-08-30</td>
                              <td>
                                lashawn.devon@bentberry.info
                                <a href="#/"
                                  onClick={this.onClick}
                                  className="pull-right"
                                >
                                  <i className="fa fa-key" />
                                </a>
                              </td>
                              <td>Oak Valley</td>
                              <td>95324</td>
                              <td>680-005-5225</td>
                              <td>
                                <span className="label label-success">
                                  Active
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="assets/img/avatars/male.png"
                                  alt=""
                                  width={20}
                                />
                              </td>
                              <td>Nick</td>
                              <td>Mcallister</td>
                              <td>2006-07-08</td>
                              <td>
                                deann@pleasure.info
                                <a href="#/"
                                  onClick={this.onClick}
                                  className="pull-right"
                                >
                                  <i className="fa fa-key" />
                                </a>
                              </td>
                              <td>San Leanna</td>
                              <td>17585</td>
                              <td>408-044-0598</td>
                              <td>
                                <span className="label label-success">
                                  Active
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="assets/img/avatars/male.png"
                                  alt=""
                                  width={20}
                                />
                              </td>
                              <td>Charlene</td>
                              <td>Nance</td>
                              <td>2013-01-13</td>
                              <td>
                                armando.felix.jimmie@ableabout.org
                                <a href="#/"
                                  onClick={this.onClick}
                                  className="pull-right"
                                >
                                  <i className="fa fa-key" />
                                </a>
                              </td>
                              <td>Edgewater-Paisano</td>
                              <td>93799</td>
                              <td>476-739-7850</td>
                              <td>
                                <span className="label label-success">
                                  Active
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="assets/img/avatars/male.png"
                                  alt=""
                                  width={20}
                                />
                              </td>
                              <td>Judy</td>
                              <td>Corbett</td>
                              <td>2013-09-15</td>
                              <td>
                                morton.jonas.forest@horse.edu
                                <a href="#/"
                                  onClick={this.onClick}
                                  className="pull-right"
                                >
                                  <i className="fa fa-key" />
                                </a>
                              </td>
                              <td>Roma</td>
                              <td>39019</td>
                              <td>575-417-6267</td>
                              <td>
                                <span className="label label-success">
                                  Active
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="assets/img/avatars/male.png"
                                  alt=""
                                  width={20}
                                />
                              </td>
                              <td>Shauna</td>
                              <td>Elmore</td>
                              <td>1996-03-29</td>
                              <td>
                                mel.marcelo@rootrough.me
                                <a href="#/"
                                  onClick={this.onClick}
                                  className="pull-right"
                                >
                                  <i className="fa fa-key" />
                                </a>
                              </td>
                              <td>Channelview</td>
                              <td>18778</td>
                              <td>419-563-2551</td>
                              <td>
                                <span className="label label-success">
                                  Active
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="assets/img/avatars/male.png"
                                  alt=""
                                  width={20}
                                />
                              </td>
                              <td>Archie</td>
                              <td>Castillo</td>
                              <td>2001-03-11</td>
                              <td>
                                walker.tyree@fruitfull.com
                                <a href="#/"
                                  onClick={this.onClick}
                                  className="pull-right"
                                >
                                  <i className="fa fa-key" />
                                </a>
                              </td>
                              <td>Martindale</td>
                              <td>77003</td>
                              <td>197-694-7475</td>
                              <td>
                                <span className="label label-success">
                                  Active
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="assets/img/avatars/male.png"
                                  alt=""
                                  width={20}
                                />
                              </td>
                              <td>Ike</td>
                              <td>Yates</td>
                              <td>2005-08-08</td>
                              <td>
                                kathi@fiction.com
                                <a href="#/"
                                  onClick={this.onClick}
                                  className="pull-right"
                                >
                                  <i className="fa fa-key" />
                                </a>
                              </td>
                              <td>Denver City</td>
                              <td>96627</td>
                              <td>562-068-2504</td>
                              <td>
                                <span className="label label-success">
                                  Active
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="assets/img/avatars/male.png"
                                  alt=""
                                  width={20}
                                />
                              </td>
                              <td>James</td>
                              <td>Harrell</td>
                              <td>2001-07-05</td>
                              <td>
                                rolando.clay@bitter.com
                                <a href="#/"
                                  onClick={this.onClick}
                                  className="pull-right"
                                >
                                  <i className="fa fa-key" />
                                </a>
                              </td>
                              <td>Sanger</td>
                              <td>38876</td>
                              <td>971-978-5229</td>
                              <td>
                                <span className="label label-success">
                                  Active
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="assets/img/avatars/male.png"
                                  alt=""
                                  width={20}
                                />
                              </td>
                              <td>Hung</td>
                              <td>Walsh</td>
                              <td>2012-03-10</td>
                              <td>
                                rory@acidacross.me
                                <a href="#/"
                                  onClick={this.onClick}
                                  className="pull-right"
                                >
                                  <i className="fa fa-key" />
                                </a>
                              </td>
                              <td>Buckholts</td>
                              <td>13087</td>
                              <td>914-948-4150</td>
                              <td>
                                <span className="label label-success">
                                  Active
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="assets/img/avatars/female.png"
                                  alt=""
                                  width={20}
                                />
                              </td>
                              <td>Frankie</td>
                              <td>Porter</td>
                              <td>2006-05-28</td>
                              <td>
                                aron.leopoldo.everette@businessbut.com
                                <a href="#/"
                                  onClick={this.onClick}
                                  className="pull-right"
                                >
                                  <i className="fa fa-key" />
                                </a>
                              </td>
                              <td>Fair Oaks Ranch</td>
                              <td>81496</td>
                              <td>935-811-1608</td>
                              <td>
                                <span className="label label-success">
                                  Active
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="assets/img/avatars/male.png"
                                  alt=""
                                  width={20}
                                />
                              </td>
                              <td>Adrienne</td>
                              <td>Dickson</td>
                              <td>2000-05-09</td>
                              <td>
                                felipe.bennie.gerardo@boiling.com
                                <a href="#/"
                                  onClick={this.onClick}
                                  className="pull-right"
                                >
                                  <i className="fa fa-key" />
                                </a>
                              </td>
                              <td>Seabrook</td>
                              <td>67641</td>
                              <td>204-684-8982</td>
                              <td>
                                <span className="label label-success">
                                  Active
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="assets/img/avatars/male.png"
                                  alt=""
                                  width={20}
                                />
                              </td>
                              <td>Ursula</td>
                              <td>Covington</td>
                              <td>2009-05-16</td>
                              <td>
                                brianne.nilda@year.me
                                <a href="#/"
                                  onClick={this.onClick}
                                  className="pull-right"
                                >
                                  <i className="fa fa-key" />
                                </a>
                              </td>
                              <td>Richland</td>
                              <td>35047</td>
                              <td>101-930-4222</td>
                              <td>
                                <span className="label label-success">
                                  Active
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="assets/img/avatars/male.png"
                                  alt=""
                                  width={20}
                                />
                              </td>
                              <td>Wendy</td>
                              <td>Spence</td>
                              <td>1996-02-23</td>
                              <td>
                                hilda.gwendolyn@brass.me
                                <a href="#/"
                                  onClick={this.onClick}
                                  className="pull-right"
                                >
                                  <i className="fa fa-key" />
                                </a>
                              </td>
                              <td>Slaton</td>
                              <td>82159</td>
                              <td>936-779-1161</td>
                              <td>
                                <span className="label label-success">
                                  Active
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="assets/img/avatars/male.png"
                                  alt=""
                                  width={20}
                                />
                              </td>
                              <td>Sarah</td>
                              <td>Mcdaniel</td>
                              <td>2003-08-03</td>
                              <td>
                                danny@language.com
                                <a href="#/"
                                  onClick={this.onClick}
                                  className="pull-right"
                                >
                                  <i className="fa fa-key" />
                                </a>
                              </td>
                              <td>Needville</td>
                              <td>16354</td>
                              <td>805-226-9457</td>
                              <td>
                                <span className="label label-success">
                                  Active
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="assets/img/avatars/male.png"
                                  alt=""
                                  width={20}
                                />
                              </td>
                              <td>Bobbi</td>
                              <td>Taylor</td>
                              <td>2008-09-29</td>
                              <td>
                                wesley@sunsupport.edu
                                <a href="#/"
                                  onClick={this.onClick}
                                  className="pull-right"
                                >
                                  <i className="fa fa-key" />
                                </a>
                              </td>
                              <td>Santa Fe</td>
                              <td>56008</td>
                              <td>781-448-8791</td>
                              <td>
                                <span className="label label-success">
                                  Active
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="assets/img/avatars/male.png"
                                  alt=""
                                  width={20}
                                />
                              </td>
                              <td>Brendan</td>
                              <td>Mckay</td>
                              <td>2010-02-13</td>
                              <td>
                                chong@example.org
                                <a href="#/"
                                  onClick={this.onClick}
                                  className="pull-right"
                                >
                                  <i className="fa fa-key" />
                                </a>
                              </td>
                              <td>Las Colonias</td>
                              <td>63927</td>
                              <td>414-598-1649</td>
                              <td>
                                <span className="label label-success">
                                  Active
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="assets/img/avatars/male.png"
                                  alt=""
                                  width={20}
                                />
                              </td>
                              <td>Beverley</td>
                              <td>Dodson</td>
                              <td>2012-08-10</td>
                              <td>
                                curt.quentin@crush.info
                                <a href="#/"
                                  onClick={this.onClick}
                                  className="pull-right"
                                >
                                  <i className="fa fa-key" />
                                </a>
                              </td>
                              <td>Study Butte-Terlingua</td>
                              <td>71556</td>
                              <td>937-937-2841</td>
                              <td>
                                <span className="label label-success">
                                  Active
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="assets/img/avatars/male.png"
                                  alt=""
                                  width={20}
                                />
                              </td>
                              <td>Hassan</td>
                              <td>Bullock</td>
                              <td>2008-03-12</td>
                              <td>
                                lena.christy@historyhole.me
                                <a href="#/"
                                  onClick={this.onClick}
                                  className="pull-right"
                                >
                                  <i className="fa fa-key" />
                                </a>
                              </td>
                              <td>Hutchins</td>
                              <td>49192</td>
                              <td>108-577-5112</td>
                              <td>
                                <span className="label label-success">
                                  Active
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="assets/img/avatars/male.png"
                                  alt=""
                                  width={20}
                                />
                              </td>
                              <td>Mack</td>
                              <td>Huber</td>
                              <td>1999-09-07</td>
                              <td>
                                marquita@push.me
                                <a href="#/"
                                  onClick={this.onClick}
                                  className="pull-right"
                                >
                                  <i className="fa fa-key" />
                                </a>
                              </td>
                              <td>Waelder</td>
                              <td>36982</td>
                              <td>812-883-4685</td>
                              <td>
                                <span className="label label-success">
                                  Active
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="assets/img/avatars/male.png"
                                  alt=""
                                  width={20}
                                />
                              </td>
                              <td>Petra</td>
                              <td>Barnett</td>
                              <td>2003-10-24</td>
                              <td>
                                elvia.alyce.deirdre@archargument.me
                                <a href="#/"
                                  onClick={this.onClick}
                                  className="pull-right"
                                >
                                  <i className="fa fa-key" />
                                </a>
                              </td>
                              <td>Pittsburg</td>
                              <td>55769</td>
                              <td>624-871-4479</td>
                              <td>
                                <span className="label label-success">
                                  Active
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="assets/img/avatars/male.png"
                                  alt=""
                                  width={20}
                                />
                              </td>
                              <td>Suzan</td>
                              <td>Case</td>
                              <td>2012-01-20</td>
                              <td>
                                casey@cover.edu
                                <a href="#/"
                                  onClick={this.onClick}
                                  className="pull-right"
                                >
                                  <i className="fa fa-key" />
                                </a>
                              </td>
                              <td>Littlefield</td>
                              <td>30080</td>
                              <td>932-088-9855</td>
                              <td>
                                <span className="label label-success">
                                  Active
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="assets/img/avatars/male.png"
                                  alt=""
                                  width={20}
                                />
                              </td>
                              <td>Jon</td>
                              <td>Mueller</td>
                              <td>2012-11-19</td>
                              <td>
                                samual.paris@change.edu
                                <a href="#/"
                                  onClick={this.onClick}
                                  className="pull-right"
                                >
                                  <i className="fa fa-key" />
                                </a>
                              </td>
                              <td>Temple</td>
                              <td>30219</td>
                              <td>162-525-3454</td>
                              <td>
                                <span className="label label-success">
                                  Active
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="assets/img/avatars/male.png"
                                  alt=""
                                  width={20}
                                />
                              </td>
                              <td>Loyd</td>
                              <td>Valenzuela</td>
                              <td>1993-08-28</td>
                              <td>
                                jerrold.robt.hank@seaseat.edu
                                <a href="#/"
                                  onClick={this.onClick}
                                  className="pull-right"
                                >
                                  <i className="fa fa-key" />
                                </a>
                              </td>
                              <td>Harker Heights</td>
                              <td>37310</td>
                              <td>295-305-4911</td>
                              <td>
                                <span className="label label-success">
                                  Active
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="assets/img/avatars/male.png"
                                  alt=""
                                  width={20}
                                />
                              </td>
                              <td>Tracie</td>
                              <td>Ewing</td>
                              <td>2013-01-08</td>
                              <td>
                                sang.deon@skysleep.info
                                <a href="#/"
                                  onClick={this.onClick}
                                  className="pull-right"
                                >
                                  <i className="fa fa-key" />
                                </a>
                              </td>
                              <td>Kennard</td>
                              <td>67299</td>
                              <td>218-444-9426</td>
                              <td>
                                <span className="label label-success">
                                  Active
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="assets/img/avatars/male.png"
                                  alt=""
                                  width={20}
                                />
                              </td>
                              <td>Jame</td>
                              <td>Cooper</td>
                              <td>2013-09-18</td>
                              <td>
                                christi@substance.org
                                <a href="#/"
                                  onClick={this.onClick}
                                  className="pull-right"
                                >
                                  <i className="fa fa-key" />
                                </a>
                              </td>
                              <td>Keene</td>
                              <td>84931</td>
                              <td>121-381-7120</td>
                              <td>
                                <span className="label label-success">
                                  Active
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="assets/img/avatars/male.png"
                                  alt=""
                                  width={20}
                                />
                              </td>
                              <td>Clyde</td>
                              <td>Hudson</td>
                              <td>2008-08-22</td>
                              <td>
                                elvia@smilesmoke.info
                                <a href="#/"
                                  onClick={this.onClick}
                                  className="pull-right"
                                >
                                  <i className="fa fa-key" />
                                </a>
                              </td>
                              <td>Sunset</td>
                              <td>88755</td>
                              <td>561-388-1897</td>
                              <td>
                                <span className="label label-success">
                                  Active
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="text-center">
                        <hr />
                        <ul className="pagination no-margin">
                          <li className="prev disabled">
                            <a href="#/" onClick={this.onClick}>Previous</a>
                          </li>
                          <li className="active">
                            <a href="#/" onClick={this.onClick}>1</a>
                          </li>
                          <li>
                            <a href="#/" onClick={this.onClick}>2</a>
                          </li>
                          <li>
                            <a href="#/" onClick={this.onClick}>3</a>
                          </li>
                          <li>
                            <a href="#/" onClick={this.onClick}>4</a>
                          </li>
                          <li>
                            <a href="#/" onClick={this.onClick}>5</a>
                          </li>
                          <li className="next">
                            <a href="#/" onClick={this.onClick}>Next</a>
                          </li>
                        </ul>
                        <br />
                        <br />
                        <br />
                      </div>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <div>
                      <h1>
                        Search <span className="semi-bold">history</span>
                      </h1>
                      <p className="alert alert-info">
                        Your search history is turned off.
                      </p>
                      <span className="onoffswitch-title">
                        Auto save Search History
                      </span>
                      <span className="onoffswitch">
                        <input
                          type="checkbox"
                          name="save_history"
                          className="onoffswitch-checkbox"
                          id="save_history"
                          defaultChecked="checked"
                        />
                        <label
                          className="onoffswitch-label"
                          htmlFor="save_history"
                        >
                          <span
                            className="onoffswitch-inner"
                            data-swchon-text="ON"
                            data-swchoff-text="OFF"
                          />
                          <span className="onoffswitch-switch" />
                        </label>
                      </span>
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </SparklineContainer>
      </div>
    );
  }
}
