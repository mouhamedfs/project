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
@Table(name = "T_SUBVENTION")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Subvention implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long numSub;

    @Column(name = "mnt_subv")
    private Float mntSubv;

    @Column(name = "date_oct_sub")
    private Date dateOctSub;

    @Column(name = "lib_subv")
    private String libSubv;

    @Column(name = "deja_depense")
    private Float dejaDepense;

    @Column(name = "cpt_sub_vire")
    private String cptSubVire;

     @Column(name = "cpt_sub_rep")
    private String cptSubRep;

    public static long getSerialversionuid() {
        return serialVersionUID;
    }

    public Long getNumSub() {
        return numSub;
    }

    public void setNumSub(Long numSub) {
        this.numSub = numSub;
    }

    public Float getMntSubv() {
        return mntSubv;
    }

    public void setMntSubv(Float mntSubv) {
        this.mntSubv = mntSubv;
    }

    public Date getDateOctSub() {
        return dateOctSub;
    }

    public void setDateOctSub(Date dateOctSub) {
        this.dateOctSub = dateOctSub;
    }

    public String getLibSubv() {
        return libSubv;
    }

    public void setLibSubv(String libSubv) {
        this.libSubv = libSubv;
    }

    public Float getDejaDepense() {
        return dejaDepense;
    }

    public void setDejaDepense(Float dejaDepense) {
        this.dejaDepense = dejaDepense;
    }

    public String getCptSubVire() {
        return cptSubVire;
    }

    public void setCptSubVire(String cptSubVire) {
        this.cptSubVire = cptSubVire;
    }

    public String getCptSubRep() {
        return cptSubRep;
    }

    public void setCptSubRep(String cptSubRep) {
        this.cptSubRep = cptSubRep;
    }

    @Override
    public String toString() {
        return "Subvention [cptSubRep=" + cptSubRep + ", cptSubVire=" + cptSubVire + ", dateOctSub=" + dateOctSub
                + ", dejaDepense=" + dejaDepense + ", libSubv=" + libSubv + ", mntSubv=" + mntSubv + ", numSub="
                + numSub + "]";
    }

    
  }
