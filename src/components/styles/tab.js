import React from "react";
import { Link, useParams } from "react-router-dom";
import { Tab } from "./profile";

const Tabs = (props) => {

    const { tabList } = props;

    const { activity } = useParams();

    const activeStyle = {
        borderBottom: "2px solid #985629",
        color: "#985629",
    };

    return (
        <Tab border="#985629">
            {tabList.map((tab) => {
                return (
                    <Link
                        to="#"
                        key={tab.name}
                        replace={true}
                        style={
                            activity === tab.name ||
                                (activity === undefined && tab.name === "tweets")
                                ? activeStyle
                                : {}
                        }
                    >
                        <div>{tab.title}</div>
                    </Link>
                );
            })}
        </Tab>
    );
};

export default Tabs;
