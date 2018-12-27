import  {GoogleProvider}  from 'react-analytics-widget'
import {GoogleDataChart} from 'react-analytics-widget'
import React from "react";
const CLIENT_ID = '181291511502-t638g4bdsphdk1kp5sr6u7cfsg3gq3km.apps.googleusercontent.com';

// graph 1 config
const last30days = {
    reportType: "ga",
    query: {
        dimensions: "ga:date",
        metrics: "ga:pageviews",
        "start-date": "30daysAgo",
        "end-date": "yesterday"
    },
    chart: {
        type: "LINE",
        options: {
            // options for google charts
            // https://google-developers.appspot.com/chart/interactive/docs/gallery
            title: "Last 30 days pageviews"
        }
    }
}

// graph 2 config
const last7days = {
    reportType: "ga",
    query: {
        dimensions: "ga:date",
        metrics: "ga:pageviews",
        "start-date": "7daysAgo",
        "end-date": "yesterday"
    },
    chart: {
        type: "LINE"
    }
}
const last2days = {
    query: {
        metrics: 'ga:sessions',
        dimensions: 'ga:country',
        'start-date': '30daysAgo',
        'end-date': 'yesterday',
        'max-results': 6,
        sort: '-ga:sessions'
    },
    chart: {
        container: 'chart-1-container',
        type: 'PIE',
        options: {
            width: '100%',
            pieHole: 5/9
        }
    }

};
// analytics views ID
const views = {
    query: {
        ids: "ga:182250521"
    }
}

const Example = () => (
    <GoogleProvider clientId={CLIENT_ID}>
        <GoogleDataChart views={views} config={last30days} />
        <GoogleDataChart views={views} config={last7days} />
        <GoogleDataChart views={views} config={last2days} />
    </GoogleProvider>
);
export default Example;