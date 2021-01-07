package reactspr.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;
import javax.persistence.*;

import java.io.Serializable;
import java.sql.Date;

/**
 * 
 * Immobilisation.
 */
@Entity
@Table(name = "Immobilisation")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Immobilisation implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long immo;

    @Column(name = "libimmo")
    private String libimmo;

    @Column(name = "genre")
    private String genre;

    @Column(name = "marque")
    private String marque;

    @Column(name = "type")
    private String type;

    @Column(name = "reference")
    private String reference;

    @Column(name = "fourn")
    private String fourn;

    @Column(name = "cpte_benef")
    private String cpteBenef;

    @Column(name = "num_bon_comm")
    private String numBonComm;

    @Column(name = "date_bon_comm")
    private Date dateBonComm;

    @Column(name = "bon_liv")
    private String bonLiv;

    @Column(name = "date_bon_liv")
    private Date dateBonLiv;

    @Column(name = "numfact")
    private String numfact;

    @Column(name = "dfact")
    private Date dfact;

    @Column(name = "valacq")
    private Float valacq;

    @Column(name = "mnttaxe")
    private Float mnttaxe;

    @Column(name = "montreeval")
    private Float montreeval;

    @Column(name = "valacq2")
    private Float valacq2;

    @Column(name = "mnttaxe2")
    private Float mnttaxe2;

    @Column(name = "ddac")
    private Date ddac;

    @Column(name = "dms")
    private Date dms;

    @Column(name = "age")
    private Integer age;

    @Column(name = "cdir")
    private String cdir;

    @Column(name = "cserv")
    private String cserv;

    @Column(name = "local")
    private String local;

    @Column(name = "csfam")
    private String csfam;

    @Column(name = "cptimmo")
    private String cptimmo;

    @Column(name = "cptamort")
    private String cptamort;

    @Column(name = "cptdot")
    private String cptdot;

    @Column(name = "cpttva")
    private String cpttva;

    @Column(name = "taux")
    private Float taux;

    @Column(name = "duree")
    private Float duree;

    @Column(name = "dfs")
    private Date dfs;

    @Column(name = "amorti")
    private Float amorti;

    @Column(name = "amorper")
    private Float amorper;

    @Column(name = "amorti1")
    private Float amorti1;

    @Column(name = "valrest")
    private Float valrest;

    @Column(name = "datcalc")
    private Date datcalc;

    @Column(name = "datfam")
    private Date datfam;

    @Column(name = "cumamort")
    private Float cumamort;

    @Column(name = "datdcalc")
    private Date datdcalc;

    @Column(name = "taux2")
    private Float taux2;

    @Column(name = "duree2")
    private Float duree2;

    @Column(name = "dfs2")
    private Date dfs2;

    @Column(name = "dup")
    private Integer dup;

    @Column(name = "durjour")
    private Integer durjour;

    @Column(name = "durmois")
    private Integer durmois;

    @Column(name = "durjrestacour")
    private Integer durjrestacour;

    @Column(name = "amortjreeval")
    private Float amortjreeval;

    @Column(name = "amortmensreeval")
    private Float amortmensreeval;

    @Column(name = "nbjrecoul")
    private Integer nbjrecoul;

    @Column(name = "durecoul")
    private Integer durecoul;

    @Column(name = "durjreeval")
    private Integer durjreeval;

    @Column(name = "amorti2")
    private Float amorti2;

    @Column(name = "camortreeval")
    private Float camortreeval;

     @Column(name = "amorper2")
    private Float amorper2;

    @Column(name = "amorti12")
    private Float amorti12;

    @Column(name = "valrest2")
    private Float valrest2;

    @Column(name = "datcalc2")
    private Date datcalc2;

    @Column(name = "datfam2")
    private Date datfam2;

    @Column(name = "cumamort2")
    private Float cumamort2;

    @Column(name = "cumamorttotal")
    private Float cumamorttotal;

    @Column(name = "immoamort")
    private Boolean immoamort;

    @Column(name = "regul")
    private Boolean regul;

    @Column(name = "anccodif")
    private String anccodif;

    @Column(name = "reeval")
    private Boolean reeval;

    @Column(name = "fiscale")
    private Boolean fiscale;

    @Column(name = "contrat")
    private Boolean contrat;

    @Column(name = "taxe")
    private Boolean taxe;

    @Column(name = "anc_compte")
    private String ancCompte;

    @Column(name = "oper")
    private String oper;

    @Column(name = "comptabilise")
    private String comptabilise;

    @Column(name = "item")
    private String item;

    @Column(name = ("immo_rattache"))
    private Integer ImmoRattache;

    @Column(name = "numinv")
    private String numinv;

    @Column(name = "codevalo")
    private String codevalo;

    @Column(name = "ancienlocal")
    private String ancienlocal;

    @Column(name = "blocnotes")
    private String blocnotes;

    @Column(name = "vo_a_reev")
    private Float voAReev;

    @Column(name = "mnt_amorti_a_reev")
    private Float mntAmortiAReev;

    @Column(name = "date_last_reev")
    private Date dateLastReev;

    @Column(name = "num_last_reev")
    private Integer numLastReev;

    @Column(name = "coef_last_reev")
    private Float coefLastReev;

    @Column(name = "amort_jour")
    private Float amortJour;

    @Column(name = "vo_debut")
    private Float voDebut;

    @Column(name = "num_subv")
    private Integer numSubv;

    @Column(name = "taux_subv")
    private Integer tauxSubv;

    @Column(name = "taux_impot")
    private Integer tauxImpot;

    @Column(name = "taux_patente")
    private Integer tauxPatente;

    @Column(name = "ad_photo")
    private String adPhoto;

    public static long getSerialversionuid() {
        return serialVersionUID;
    }

    public Long getImmo() {
        return immo;
    }

    public void setImmo(Long immo) {
        this.immo = immo;
    }

    public String getLibimmo() {
        return libimmo;
    }

    public void setLibimmo(String libimmo) {
        this.libimmo = libimmo;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public String getMarque() {
        return marque;
    }

    public void setMarque(String marque) {
        this.marque = marque;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getReference() {
        return reference;
    }

    public void setReference(String reference) {
        this.reference = reference;
    }

    public String getFourn() {
        return fourn;
    }

    public void setFourn(String fourn) {
        this.fourn = fourn;
    }

    public String getCpteBenef() {
        return cpteBenef;
    }

    public void setCpteBenef(String cpteBenef) {
        this.cpteBenef = cpteBenef;
    }

    public String getNumBonComm() {
        return numBonComm;
    }

    public void setNumBonComm(String numBonComm) {
        this.numBonComm = numBonComm;
    }

    public Date getDateBonComm() {
        return dateBonComm;
    }

    public void setDateBonComm(Date dateBonComm) {
        this.dateBonComm = dateBonComm;
    }

    public String getBonLiv() {
        return bonLiv;
    }

    public void setBonLiv(String bonLiv) {
        this.bonLiv = bonLiv;
    }

    public Date getDateBonLiv() {
        return dateBonLiv;
    }

    public void setDateBonLiv(Date dateBonLiv) {
        this.dateBonLiv = dateBonLiv;
    }

    public String getNumfact() {
        return numfact;
    }

    public void setNumfact(String numfact) {
        this.numfact = numfact;
    }

    public Date getDfact() {
        return dfact;
    }

    public void setDfact(Date dfact) {
        this.dfact = dfact;
    }

    public Float getValacq() {
        return valacq;
    }

    public void setValacq(Float valacq) {
        this.valacq = valacq;
    }

    public Float getMnttaxe() {
        return mnttaxe;
    }

    public void setMnttaxe(Float mnttaxe) {
        this.mnttaxe = mnttaxe;
    }

    public Float getMontreeval() {
        return montreeval;
    }

    public void setMontreeval(Float montreeval) {
        this.montreeval = montreeval;
    }

    public Float getValacq2() {
        return valacq2;
    }

    public void setValacq2(Float valacq2) {
        this.valacq2 = valacq2;
    }

    public Float getMnttaxe2() {
        return mnttaxe2;
    }

    public void setMnttaxe2(Float mnttaxe2) {
        this.mnttaxe2 = mnttaxe2;
    }

    public Date getDdac() {
        return ddac;
    }

    public void setDdac(Date ddac) {
        this.ddac = ddac;
    }

    public Date getDms() {
        return dms;
    }

    public void setDms(Date dms) {
        this.dms = dms;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public String getCdir() {
        return cdir;
    }

    public void setCdir(String cdir) {
        this.cdir = cdir;
    }

    public String getCserv() {
        return cserv;
    }

    public void setCserv(String cserv) {
        this.cserv = cserv;
    }

    public String getLocal() {
        return local;
    }

    public void setLocal(String local) {
        this.local = local;
    }

    public String getCsfam() {
        return csfam;
    }

    public void setCsfam(String csfam) {
        this.csfam = csfam;
    }

    public String getCptimmo() {
        return cptimmo;
    }

    public void setCptimmo(String cptimmo) {
        this.cptimmo = cptimmo;
    }

    public String getCptamort() {
        return cptamort;
    }

    public void setCptamort(String cptamort) {
        this.cptamort = cptamort;
    }

    public String getCptdot() {
        return cptdot;
    }

    public void setCptdot(String cptdot) {
        this.cptdot = cptdot;
    }

    public String getCpttva() {
        return cpttva;
    }

    public void setCpttva(String cpttva) {
        this.cpttva = cpttva;
    }

    public Float getTaux() {
        return taux;
    }

    public void setTaux(Float taux) {
        this.taux = taux;
    }

    public Float getDuree() {
        return duree;
    }

    public void setDuree(Float duree) {
        this.duree = duree;
    }

    public Date getDfs() {
        return dfs;
    }

    public void setDfs(Date dfs) {
        this.dfs = dfs;
    }

    public Float getAmorti() {
        return amorti;
    }

    public void setAmorti(Float amorti) {
        this.amorti = amorti;
    }

    public Float getAmorper() {
        return amorper;
    }

    public void setAmorper(Float amorper) {
        this.amorper = amorper;
    }

    public Float getAmorti1() {
        return amorti1;
    }

    public void setAmorti1(Float amorti1) {
        this.amorti1 = amorti1;
    }

    public Float getValrest() {
        return valrest;
    }

    public void setValrest(Float valrest) {
        this.valrest = valrest;
    }

    public Date getDatcalc() {
        return datcalc;
    }

    public void setDatcalc(Date datcalc) {
        this.datcalc = datcalc;
    }

    public Date getDatfam() {
        return datfam;
    }

    public void setDatfam(Date datfam) {
        this.datfam = datfam;
    }

    public Float getCumamort() {
        return cumamort;
    }

    public void setCumamort(Float cumamort) {
        this.cumamort = cumamort;
    }

    public Date getDatdcalc() {
        return datdcalc;
    }

    public void setDatdcalc(Date datdcalc) {
        this.datdcalc = datdcalc;
    }

    public Float getTaux2() {
        return taux2;
    }

    public void setTaux2(Float taux2) {
        this.taux2 = taux2;
    }

    public Float getDuree2() {
        return duree2;
    }

    public void setDuree2(Float duree2) {
        this.duree2 = duree2;
    }

    public Date getDfs2() {
        return dfs2;
    }

    public void setDfs2(Date dfs2) {
        this.dfs2 = dfs2;
    }

    public Integer getDup() {
        return dup;
    }

    public void setDup(Integer dup) {
        this.dup = dup;
    }

    public Integer getDurjour() {
        return durjour;
    }

    public void setDurjour(Integer durjour) {
        this.durjour = durjour;
    }

    public Integer getDurmois() {
        return durmois;
    }

    public void setDurmois(Integer durmois) {
        this.durmois = durmois;
    }

    public Integer getDurjrestacour() {
        return durjrestacour;
    }

    public void setDurjrestacour(Integer durjrestacour) {
        this.durjrestacour = durjrestacour;
    }

    public Float getAmortjreeval() {
        return amortjreeval;
    }

    public void setAmortjreeval(Float amortjreeval) {
        this.amortjreeval = amortjreeval;
    }

    public Float getAmortmensreeval() {
        return amortmensreeval;
    }

    public void setAmortmensreeval(Float amortmensreeval) {
        this.amortmensreeval = amortmensreeval;
    }

    public Integer getNbjrecoul() {
        return nbjrecoul;
    }

    public void setNbjrecoul(Integer nbjrecoul) {
        this.nbjrecoul = nbjrecoul;
    }

    public Integer getDurecoul() {
        return durecoul;
    }

    public void setDurecoul(Integer durecoul) {
        this.durecoul = durecoul;
    }

    public Integer getDurjreeval() {
        return durjreeval;
    }

    public void setDurjreeval(Integer durjreeval) {
        this.durjreeval = durjreeval;
    }

    public Float getAmorti2() {
        return amorti2;
    }

    public void setAmorti2(Float amorti2) {
        this.amorti2 = amorti2;
    }

    public Float getCamortreeval() {
        return camortreeval;
    }

    public void setCamortreeval(Float camortreeval) {
        this.camortreeval = camortreeval;
    }

    public Float getAmorper2() {
        return amorper2;
    }

    public void setAmorper2(Float amorper2) {
        this.amorper2 = amorper2;
    }

    public Float getAmorti12() {
        return amorti12;
    }

    public void setAmorti12(Float amorti12) {
        this.amorti12 = amorti12;
    }

    public Float getValrest2() {
        return valrest2;
    }

    public void setValrest2(Float valrest2) {
        this.valrest2 = valrest2;
    }

    public Date getDatcalc2() {
        return datcalc2;
    }

    public void setDatcalc2(Date datcalc2) {
        this.datcalc2 = datcalc2;
    }

    public Date getDatfam2() {
        return datfam2;
    }

    public void setDatfam2(Date datfam2) {
        this.datfam2 = datfam2;
    }

    public Float getCumamort2() {
        return cumamort2;
    }

    public void setCumamort2(Float cumamort2) {
        this.cumamort2 = cumamort2;
    }

    public Boolean getImmoamort() {
        return immoamort;
    }

    public void setImmoamort(Boolean immoamort) {
        this.immoamort = immoamort;
    }

    public Boolean getRegul() {
        return regul;
    }

    public void setRegul(Boolean regul) {
        this.regul = regul;
    }

    public String getAnccodif() {
        return anccodif;
    }

    public void setAnccodif(String anccodif) {
        this.anccodif = anccodif;
    }

    public Boolean getReeval() {
        return reeval;
    }

    public void setReeval(Boolean reeval) {
        this.reeval = reeval;
    }

    public Boolean getFiscale() {
        return fiscale;
    }

    public void setFiscale(Boolean fiscale) {
        this.fiscale = fiscale;
    }

    public Boolean getContrat() {
        return contrat;
    }

    public void setContrat(Boolean contrat) {
        this.contrat = contrat;
    }

    public Boolean getTaxe() {
        return taxe;
    }

    public void setTaxe(Boolean taxe) {
        this.taxe = taxe;
    }

    public String getAncCompte() {
        return ancCompte;
    }

    public void setAncCompte(String ancCompte) {
        this.ancCompte = ancCompte;
    }

    public String getOper() {
        return oper;
    }

    public void setOper(String oper) {
        this.oper = oper;
    }

    public String getComptabilise() {
        return comptabilise;
    }

    public void setComptabilise(String comptabilise) {
        this.comptabilise = comptabilise;
    }

    public String getItem() {
        return item;
    }

    public void setItem(String item) {
        this.item = item;
    }

    public Integer getImmoRattache() {
        return ImmoRattache;
    }

    public void setImmoRattache(Integer immoRattache) {
        ImmoRattache = immoRattache;
    }

    public String getNuminv() {
        return numinv;
    }

    public void setNuminv(String numinv) {
        this.numinv = numinv;
    }

    public String getCodevalo() {
        return codevalo;
    }

    public void setCodevalo(String codevalo) {
        this.codevalo = codevalo;
    }

    public String getAncienlocal() {
        return ancienlocal;
    }

    public void setAncienlocal(String ancienlocal) {
        this.ancienlocal = ancienlocal;
    }

    public String getBlocnotes() {
        return blocnotes;
    }

    public void setBlocnotes(String blocnotes) {
        this.blocnotes = blocnotes;
    }

    public Float getVoAReev() {
        return voAReev;
    }

    public void setVoAReev(Float voAReev) {
        this.voAReev = voAReev;
    }

    public Float getMntAmortiAReev() {
        return mntAmortiAReev;
    }

    public void setMntAmortiAReev(Float mntAmortiAReev) {
        this.mntAmortiAReev = mntAmortiAReev;
    }

    public Date getDateLastReev() {
        return dateLastReev;
    }

    public void setDateLastReev(Date dateLastReev) {
        this.dateLastReev = dateLastReev;
    }

    public Integer getNumLastReev() {
        return numLastReev;
    }

    public void setNumLastReev(Integer numLastReev) {
        this.numLastReev = numLastReev;
    }

    public Float getCoefLastReev() {
        return coefLastReev;
    }

    public void setCoefLastReev(Float coefLastReev) {
        this.coefLastReev = coefLastReev;
    }

    public Float getAmortJour() {
        return amortJour;
    }

    public void setAmortJour(Float amortJour) {
        this.amortJour = amortJour;
    }

    public Float getVoDebut() {
        return voDebut;
    }

    public void setVoDebut(Float voDebut) {
        this.voDebut = voDebut;
    }

    public Integer getNumSubv() {
        return numSubv;
    }

    public void setNumSubv(Integer numSubv) {
        this.numSubv = numSubv;
    }

    public Integer getTauxSubv() {
        return tauxSubv;
    }

    public void setTauxSubv(Integer tauxSubv) {
        this.tauxSubv = tauxSubv;
    }

    public Integer getTauxImpot() {
        return tauxImpot;
    }

    public void setTauxImpot(Integer tauxImpot) {
        this.tauxImpot = tauxImpot;
    }

    public Integer getTauxPatente() {
        return tauxPatente;
    }

    public void setTauxPatente(Integer tauxPatente) {
        this.tauxPatente = tauxPatente;
    }

    public String getAdPhoto() {
        return adPhoto;
    }

    public void setAdPhoto(String adPhoto) {
        this.adPhoto = adPhoto;
    }

    @Override
    public String toString() {
        return "Immobilisation [ImmoRattache=" + ImmoRattache + ", adPhoto=" + adPhoto + ", age=" + age + ", amorper="
                + amorper + ", amorper2=" + amorper2 + ", amortJour=" + amortJour + ", amorti=" + amorti + ", amorti1="
                + amorti1 + ", amorti12=" + amorti12 + ", amorti2=" + amorti2 + ", amortjreeval=" + amortjreeval
                + ", amortmensreeval=" + amortmensreeval + ", ancCompte=" + ancCompte + ", anccodif=" + anccodif
                + ", ancienlocal=" + ancienlocal + ", blocnotes=" + blocnotes + ", bonLiv=" + bonLiv + ", camortreeval="
                + camortreeval + ", cdir=" + cdir + ", codevalo=" + codevalo + ", coefLastReev=" + coefLastReev
                + ", comptabilise=" + comptabilise + ", contrat=" + contrat + ", cptamort=" + cptamort + ", cptdot="
                + cptdot + ", cpteBenef=" + cpteBenef + ", cptimmo=" + cptimmo + ", cpttva=" + cpttva + ", cserv="
                + cserv + ", csfam=" + csfam + ", cumamort=" + cumamort + ", cumamort2=" + cumamort2 + ", datcalc="
                + datcalc + ", datcalc2=" + datcalc2 + ", datdcalc=" + datdcalc + ", dateBonComm=" + dateBonComm
                + ", dateBonLiv=" + dateBonLiv + ", dateLastReev=" + dateLastReev + ", datfam=" + datfam + ", datfam2="
                + datfam2 + ", ddac=" + ddac + ", dfact=" + dfact + ", dfs=" + dfs + ", dfs2=" + dfs2 + ", dms=" + dms
                + ", dup=" + dup + ", durecoul=" + durecoul + ", duree=" + duree + ", duree2=" + duree2 + ", durjour="
                + durjour + ", durjreeval=" + durjreeval + ", durjrestacour=" + durjrestacour + ", durmois=" + durmois
                + ", fiscale=" + fiscale + ", fourn=" + fourn + ", genre=" + genre + ", immo=" + immo + ", immoamort="
                + immoamort + ", item=" + item + ", libimmo=" + libimmo + ", local=" + local + ", marque=" + marque
                + ", mntAmortiAReev=" + mntAmortiAReev + ", mnttaxe=" + mnttaxe + ", mnttaxe2=" + mnttaxe2
                + ", montreeval=" + montreeval + ", nbjrecoul=" + nbjrecoul + ", numBonComm=" + numBonComm
                + ", numLastReev=" + numLastReev + ", numSubv=" + numSubv + ", numfact=" + numfact + ", numinv="
                + numinv + ", oper=" + oper + ", reeval=" + reeval + ", reference=" + reference + ", regul=" + regul
                + ", taux=" + taux + ", taux2=" + taux2 + ", tauxImpot=" + tauxImpot + ", tauxPatente=" + tauxPatente
                + ", tauxSubv=" + tauxSubv + ", taxe=" + taxe + ", type=" + type + ", valacq=" + valacq + ", valacq2="
                + valacq2 + ", valrest=" + valrest + ", valrest2=" + valrest2 + ", voAReev=" + voAReev + ", voDebut="
                + voDebut + "]";
    }
    
    
    
}
