package reactspr.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;

/**
 * A Job.
 */
@Entity
@Table(name = "job")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Job implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Column(name = "nom_job")
    private String nomJob;

    @Column(name = "salaire_min")
    private Long salaireMin;

    @Column(name = "salaire_max")
    private Long salaireMax;

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNomJob() {
        return nomJob;
    }

    public Job nomJob(String nomJob) {
        this.nomJob = nomJob;
        return this;
    }

    public void setNomJob(String nomJob) {
        this.nomJob = nomJob;
    }

    public Long getSalaireMin() {
        return salaireMin;
    }

    public Job salaireMin(Long salaireMin) {
        this.salaireMin = salaireMin;
        return this;
    }

    public void setSalaireMin(Long salaireMin) {
        this.salaireMin = salaireMin;
    }

    public Long getSalaireMax() {
        return salaireMax;
    }

    public Job salaireMax(Long salaireMax) {
        this.salaireMax = salaireMax;
        return this;
    }

    public void setSalaireMax(Long salaireMax) {
        this.salaireMax = salaireMax;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Job)) {
            return false;
        }
        return id != null && id.equals(((Job) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Job{" +
            "id=" + getId() +
            ", nomJob='" + getNomJob() + "'" +
            ", salaireMin=" + getSalaireMin() +
            ", salaireMax=" + getSalaireMax() +
            "}";
    }
}
