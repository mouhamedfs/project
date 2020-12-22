package reactspr.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;
import javax.persistence.*;
import java.io.Serializable;
import java.sql.Date;

@Entity
@Table(name = "T_PARAMPASSS")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)

public class ParamPass implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long numParam;

    @Column(name = "num_numbers")
    private String numNumbers;

    @Column(name = "num_Upper")
    private Integer numUpper;

    @Column(name = "num_special")
    private Integer numSpecial;

    @Column(name = "date_def")
    private Date dateDef;

    @Column(name = "min_length")
    private Integer minLength;

    @Column(name = "libelle_param")
    private String libelleParam;

    @Column(name = "freq_modif")
    private Integer freqModif;

    @Column(name = "nbre_jour_activ")
    private Integer nbreJourActiv;

    @Column(name = "nbre_passe_ant")
    private Integer nbrePasseAnt;

    @Column(name = "nb_jour_av_modif")
    private Integer nbJourAvModif;

    public static long getSerialversionuid() {
        return serialVersionUID;
    }

    public Long getNumParam() {
        return numParam;
    }

    public void setNumParam(Long numParam) {
        this.numParam = numParam;
    }

    public String getNumNumbers() {
        return numNumbers;
    }

    public void setNumNumbers(String numNumbers) {
        this.numNumbers = numNumbers;
    }

    public Integer getNumUpper() {
        return numUpper;
    }

    public void setNumUpper(Integer numUpper) {
        this.numUpper = numUpper;
    }

    public Integer getNumSpecial() {
        return numSpecial;
    }

    public void setNumSpecial(Integer numSpecial) {
        this.numSpecial = numSpecial;
    }

    public Date getDateDef() {
        return dateDef;
    }

    public void setDateDef(Date dateDef) {
        this.dateDef = dateDef;
    }

    public Integer getMinLength() {
        return minLength;
    }

    public void setMinLength(Integer minLength) {
        this.minLength = minLength;
    }

    public String getLibelleParam() {
        return libelleParam;
    }

    public void setLibelleParam(String libelleParam) {
        this.libelleParam = libelleParam;
    }

    public Integer getFreqModif() {
        return freqModif;
    }

    public void setFreqModif(Integer freqModif) {
        this.freqModif = freqModif;
    }

    public Integer getNbreJourActiv() {
        return nbreJourActiv;
    }

    public void setNbreJourActiv(Integer nbreJourActiv) {
        this.nbreJourActiv = nbreJourActiv;
    }

    public Integer getNbrePasseAnt() {
        return nbrePasseAnt;
    }

    public void setNbrePasseAnt(Integer nbrePasseAnt) {
        this.nbrePasseAnt = nbrePasseAnt;
    }

    public Integer getNbJourAvModif() {
        return nbJourAvModif;
    }

    public void setNbJourAvModif(Integer nbJourAvModif) {
        this.nbJourAvModif = nbJourAvModif;
    }

    @Override
    public String toString() {
        return "ParamPass [dateDef=" + dateDef + ", freqModif=" + freqModif + ", libelleParam=" + libelleParam
                + ", minLength=" + minLength + ", nbJourAvModif=" + nbJourAvModif + ", nbreJourActiv=" + nbreJourActiv
                + ", nbrePasseAnt=" + nbrePasseAnt + ", numNumbers=" + numNumbers + ", numParam=" + numParam
                + ", numSpecial=" + numSpecial + ", numUpper=" + numUpper + "]";
    }

    


    
    






    
    
}
