package reactspr.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;
import javax.persistence.*;
import java.io.Serializable;

/**
 * An Agence.
 */
@Entity
@Table(name = "Agence")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Agence implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long age;

    @Column(name = "libage")
    private String libage;

    @Column(name = "csite")
    private String csite;

    public static long getSerialversionuid() {
        return serialVersionUID;
    }

    public Long getAge() {
        return age;
    }

    public void setAge(Long age) {
        this.age = age;
    }

    public String getLibage() {
        return libage;
    }

    public void setLibage(String libage) {
        this.libage = libage;
    }

    public String getCsite() {
        return csite;
    }

    public void setCsite(String csite) {
        this.csite = csite;
    }

    @Override
    public String toString() {
        return "Agence [age=" + age + ", csite=" + csite + ", libage=" + libage + "]";
    }
}
