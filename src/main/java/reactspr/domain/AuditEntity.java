package reactspr.domain;

import java.io.Serializable;
import java.time.Instant;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import java.sql.Date;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "audits_entity")
public class AuditEntity implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    @Column(name = "audit_id")
    private Long id;

    @Column(name = "principal")
    private String principal;

    @Column(name = "action_date")
    private Instant actionDate;

    @Column(name = "action_type")
    private String actionType;

    @Column(name = "action_table")
    private String actionTable;

    public static long getSerialversionuid() {
        return serialVersionUID;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPrincipal() {
        return principal;
    }

    public void setPrincipal(String principal) {
        this.principal = principal;
    }

    public Instant getActionDate() {
        return actionDate;
    }

    public void setActionDate(Instant actionDate) {
        this.actionDate = actionDate;
    }

    public String getActionType() {
        return actionType;
    }

    public void setActionType(String actionType) {
        this.actionType = actionType;
    }

    public String getActionTable() {
        return actionTable;
    }

    public void setActionTable(String actionTable) {
        this.actionTable = actionTable;
    }

    @Override
    public String toString() {
        return "AuditEntity [actionDate=" + actionDate + ", actionTable=" + actionTable + ", actionType=" + actionType
                + ", id=" + id + ", principal=" + principal + "]";
    }

    
    
}
