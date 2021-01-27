package reactspr.repository;
import reactspr.domain.Subvention;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data repository for the Subvention entity.
 */
@SuppressWarnings("unused")
@Repository
public interface SubventionRepository extends JpaRepository<Subvention, Long> {
}
