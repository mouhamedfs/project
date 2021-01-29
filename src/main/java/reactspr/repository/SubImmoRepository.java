package reactspr.repository;
import reactspr.domain.SubImmo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Spring Data repository for the SubImmo entity.
 */
@SuppressWarnings("unused")
@Repository
public interface SubImmoRepository extends JpaRepository<SubImmo, Long> {
}
