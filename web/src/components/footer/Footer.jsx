import { makeStyles } from "@material-ui/core/";
import { Twitter, Facebook, Instagram, LinkedIn } from "@material-ui/icons";
import wocimage from "../../res/img/woclogo.jpg";

const styles = makeStyles(() => ({
    contactInformationDiv: {
        backgroundColor: "#895714",
        marginTop: 40,
        paddingTop: 40,
        paddingBottom: 40,
        display: "flex"
    },
    contactInformation:{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        width: "70%"
    },
    informationTitle: {
        color: "white",
        fontSize: 26,
        fontWeight: 400,
        letterSpacing: 0,
        fontFamily: `'Roboto Slab', serif`,
        marginLeft: 80
    },
    information: {
        color: "white",
        fontSize: 17,
        fontWeight: 200,
        letterSpacing: 0,
        fontFamily: `'Roboto Slab', serif`,
        marginLeft: 120,
        lineHeight: 1.5
    },
    definitionContainer: {
        backgroundColor: "black",
        color: "grey",
        letterSpacing: 0,
        fontFamily: `'Roboto Slab', serif`,
        fontWeight: 400,
        
    },
    definitionDiv: {
        display: "flex",
        marginLeft: 80,
        marginRight: 80
    },
    block: {
        lineHeight: 1.7,
        width: "25%",
        textAlign: "justify",
        margin: 30
    },
    title:{
        fontWeight: 400,
        fontSize:20,
        color: "white"
    },
    wocimage: {
        width: 150,
        height: 150,
        maxWidth: 150,
        maxHeight: 150,
        textAlign: "center",
        display: "block",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
    },
    socialMediaDiv: {
        width: "30%",
        float: "right",
        marginRight: 80     
    },
    socialMediaTitle: {
        textAlign: "right",
        color: "white",
        fontSize: 17,
        fontWeight: 300,
        letterSpacing: 0,
        fontFamily: `'Roboto Slab', serif`,
        width: "100%"
    },
    socialMediaIcons: {
        width: "100%",
        textAlign: "right"
    },
    socialMediaIcon: {
        color: "white",
        fontSize: 35
    },
    copyright:{
        fontSize: 15,
        fontFamily: `'Roboto Slab', serif`,
        fontWeight: 300,
        color: "grey",
        backgroundColor: "black",
        opacity: 0.9,
        height: "100%",
        paddingTop: 20,
        paddingBottom: 20
    },
    paragraph: {
        marginLeft: 80,
        marginRight: 80,
        allign: "left",
        textAlign: "justify"
    },
    link: {
        color: "#ffffff",
        textDecoration: "none",
        "&:hover": {
            color: "#afafaf"
        },
        fontWeight: 400
    },
    linkCopyright: {
        marginRight: 10,
        color: "#ffffff",
        textDecoration: "none",
        "&:hover": {
            color: "#afafaf"
        },
        fontWeight: 400,
    }
}));

const Footer = () => {
    const classes = styles();

    const address = "Level 9/123 Epping Rd, Macquarie Park, NSW, 2113";
    const phone = "+612 8875 7823";
    const email = "hello@womenofcolour.org.au";


    return (
        <>
            <div className={classes.contactInformationDiv}>
                <div className={classes.contactInformation}>
                    <div className={classes.informationTitle}>
                        Contact Information:
                    </div>
                    <div className={classes.information}>
                        <p>
                            Address: {address}
                            <br/>
                            Phone: {phone}
                            <br/>
                            Email: {email} 
                        </p>
                    </div>
                </div>
                <div className={classes.socialMediaDiv}>
                    <div className={classes.socialMediaTitle}>
                        <p>
                            Follow us on
                        </p>
                    </div>
                    <div div className={classes.socialMediaIcons}>
                        <a href="https://www.facebook.com/WomenofColourAU" target="_blank"><Facebook className={classes.socialMediaIcon}/></a>
                        <a href="https://www.linkedin.com/company/womenofcolourltd" target="_blank"><LinkedIn className={classes.socialMediaIcon}/></a>
                        <a href="https://twitter.com/WomenofColourAU" target="_blank"><Twitter className={classes.socialMediaIcon}/></a>
                        <a href="https://www.instagram.com/womenofcolourau/" target="_blank"><Instagram className={classes.socialMediaIcon}/></a>
                    </div>
                </div>
            </div>
            <div className={classes.definitionContainer}>
                <div className={classes.definitionDiv}>
                    <div className={classes.block}>
                        <p>
                            <img className={classes.wocimage} src={wocimage} alt="women of colour image"></img>
                            <br />
                            We exist to champion Australia’s Women of Colour.
                        </p>
                    </div>
                    <div className={classes.block}>
                        <h3 className={classes.title}>The Origin of the phrase “Women of Color”</h3>
                        <div>
                        "Women of Color is not a biological designation. It is a solidarity definition. 
                        A commitment to work in collaboration with other oppressed women of color who have 
                        been minoritized. It is a term that has a lot of power." <a href="https://www.lorettaross.com/" target="_blank" className={classes.link}>Loretta Ross</a>
                        <br />
                        <a href="https://womenofcolour.org.au/the-origin-of-the-phrase-women-of-color/" target="_blank" className={classes.link}>Learn more here</a>
                        </div>
                    </div>
                    <div className={classes.block}>
                        <h3 className={classes.title}>Women Definition</h3>
                        <div>
                            Women - Transgender and cisgender, all those who experience or have experienced oppression as women, 
                            including non-binary and gender non-conforming people and all those who identify as women. Self-definition 
                            is at the discretion of the individual.
                            <br />
                            <a href="https://www.wire.org.au/tgd-policy/" target="_blank" className={classes.link}>Definition credit: wire.org.au</a>
                        </div>
                    </div>
                    <div className={classes.block}>
                        <h3 className={classes.title}>ALLY Definition</h3>
                        <div>
                            A - always centre the impacted
                            <br />
                            L - listen and learn from those who live in oppression
                            <br />
                            L - leverage your privilege
                            <br />
                            Y - yield the floor
                            <br />
                            *Mnemonic credit: Kayla Reed Executive Director <a href="https://actionstl.org/" target="_blank" className={classes.link}>ACTION St. Louis</a>
                            <br />
                            Follow Kayla Reed on Twitter <a href="https://twitter.com/iKaylaReed/" target="_blank" className={classes.link}>@iKaylaReed</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.copyright}>
                <p className={classes.paragraph}>
                    <a className={classes.linkCopyright} href="https://womenofcolour.org.au/privacy-policy" >Privacy Policy</a>
                    <a className={classes.linkCopyright} href="https://womenofcolour.org.au/refund-policy/">Refund Policy</a>
                    <a className={classes.linkCopyright} href="https://womenofcolour.org.au/terms-of-use/">Terms Of Use</a>
                </p>
                <p className={classes.paragraph}>
                    WOMEN OF COLOUR LTD  ACN  643 518 576 ABN 17 643 518 576  is an 
                    <a className={classes.link} href="https://www.abr.business.gov.au/ABN/View?abn=17643518576"> Australian Public Company Limited by Guarantee</a>.
                    We are a <a className={classes.link} href="https://www.acnc.gov.au/charity/62f294418879c383b267fa2ab7952c5a#overview">registered charity</a> 
                    with the Australian Charities and Not-for-profits Commission (ACNC).
                </p>
                <p className={classes.paragraph}>
                    Women Of Colour Ltd Copyright 2021 All Rights Reserved
                </p>
                <p className={classes.paragraph}>
                    <i>
                    We acknowledge the Wallumattagal clan of the Darug nation as the Traditional Custodians of the land upon which Women of Colour Australia is situated. 
                    We pay our respects to their Elders past and present. We acknowledge and honour the strength and resilience of Aboriginal and Torres Strait Islander 
                    women with whom we stand in solidarity. We acknowledge that as settlers on this stolen Aboriginal land, we are beneficiaries of the dispossession, 
                    genocide, and ongoing colonial violence against Aboriginal and Torres Strait Islander peoples. We believe that it is our collective responsibility to 
                    help dismantle the structural inequities and systemic barriers oppressing the original inhabitants of this land. 
                    This land is and always will be Aboriginal land. Sovereignty was never ceded.
                    </i>
                </p>
            </div>
        </>
    )
}

export default Footer;