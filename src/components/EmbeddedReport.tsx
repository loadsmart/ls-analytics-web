import { TextField } from "@loadsmart/loadsmart-ui";
import { models, Report } from "powerbi-client";

import { loadsmartPowerBITheme } from './loadsmartPowerBITheme'
import { PowerBIEmbed } from "powerbi-client-react";
import { useRef, useState
 } from "react";


const GROUP_ID = 'f8579d3a-0d28-4355-9f0d-18e52bacb16b'
const REPORT_ID = '60c2b48b-3c55-4ff0-b536-6d3ef9879e83'
const EMBED_URL = `https://app.powerbi.com/reportEmbed?reportId=${REPORT_ID}&groupId=${GROUP_ID}`
 
const EmbeddedReport = () => {
    const [accessToken, setAccessToken] = useState('')
    const report = useRef<Report>()

    return (
        <>
            <TextField type="password" value={accessToken} onChange={event => setAccessToken(event.target.value)} />
            {accessToken !== '' && (
                <PowerBIEmbed 
                    embedConfig={{
                        type: 'report',
                        id: REPORT_ID,
                        embedUrl: EMBED_URL,
                        accessToken: accessToken,
                        tokenType: models.TokenType.Embed,
                        settings: {
                            layoutType: models.LayoutType.Custom,
                            customLayout: {
                                displayOption: models.DisplayOption.FitToWidth,
                            },
                            panes: {
                                filters: {
                                    expanded: false,
                                    visible: false,
                                },
                                pageNavigation: {
                                    visible: false,
                                },
                                syncSlicers: {
                                    visible: false,
                                },
                                fields: {
                                    visible: false,
                                },
                                selection: {
                                    visible: false,
                                },
                            },
                            background: models.BackgroundType.Transparent,
                        },
                        theme: {
                            themeJson: loadsmartPowerBITheme,
                        },
                    }}  
                    cssClassName={'report-style-class'}
                    getEmbeddedComponent={embeddedReport => {
                        report.current = embeddedReport as Report
                    }}
                />
            )}
        </>
    );
}

export {EmbeddedReport};