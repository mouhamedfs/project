package reactspr.domain;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;
import javax.persistence.*;
import java.io.Serializable;
import java.sql.Date;

/**
 * A Subvention.
 */
@Entity
@Table(name = "T_SUBIMMO")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class SubImmo implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long numSub;

    @Column(name = "num_immo")
    private Integer numImmo;

    @Column(name = "taux_amort")
    private Float tauxAmort;

    @Column(name = "montant")
    private Float montant;

    @Column(name = "cpt_resul_sub")
    private String cptResulSub;

    @Column(name = "cpt_sub_rep")
    private String cptSubRep;

    @Column(name = "taux_subv")
    private Float tauxSubv;

    @Column(name = "date_serv_immo")
    private Date dateServImmo;

    @Column(name = "mode_amort_subv")
    private Integer modeAmortSubv;

    public static long getSerialversionuid() {
        return serialVersionUID;
    }

    public Long getNumSub() {
        return numSub;
    }

    public void setNumSub(Long numSub) {
        this.numSub = numSub;
    }

    public Integer getNumImmo() {
        return numImmo;
    }

    public void setNumImmo(Integer numImmo) {
        this.numImmo = numImmo;
    }

    public Float getTauxAmort() {
        return tauxAmort;
    }

    public void setTauxAmort(Float tauxAmort) {
        this.tauxAmort = tauxAmort;
    }

    public Float getMontant() {
        return montant;
    }

    public void setMontant(Float montant) {
        this.montant = montant;
    }

    public String getCptResulSub() {
        return cptResulSub;
    }

    public void setCptResulSub(String cptResulSub) {
        this.cptResulSub = cptResulSub;
    }

    public String getCptSubRep() {
        return cptSubRep;
    }

    public void setCptSubRep(String cptSubRep) {
        this.cptSubRep = cptSubRep;
    }

    public Float getTauxSubv() {
        return tauxSubv;
    }

    public void setTauxSubv(Float tauxSubv) {
        this.tauxSubv = tauxSubv;
    }

    public Date getDateServImmo() {
        return dateServImmo;
    }

    public void setDateServImmo(Date dateServImmo) {
        this.dateServImmo = dateServImmo;
    }

    public Integer getModeAmortSubv() {
        return modeAmortSubv;
    }

    public void setModeAmortSubv(Integer modeAmortSubv) {
        this.modeAmortSubv = modeAmortSubv;
    }

    @Override
    public String toString() {
        return "SubImmo [cptResulSub=" + cptResulSub + ", cptSubRep=" + cptSubRep + ", dateServImmo=" + dateServImmo
                + ", modeAmortSubv=" + modeAmortSubv + ", montant=" + montant + ", numImmo=" + numImmo + ", numSub="
                + numSub + ", tauxAmort=" + tauxAmort + ", tauxSubv=" + tauxSubv + "]";
    }

    

    

  }
